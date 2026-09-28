import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve, join } from 'node:path';
import sharp from 'sharp';

const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
const directory = resolve(option('--dir', 'dist'));
const origin = option('--site', 'https://www.hannazumsande.de');
const base = option('--base', '/').replace(/\/$/, '');
const indexable = args.includes('--indexable');
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attributes = text => Object.fromEntries([...text.matchAll(/([\w:-]+)="([^"]*)"/g)].map(match => [match[1], decode(match[2])]));
const htmlFiles = readdirSync(directory, { recursive: true }).filter(file => file.endsWith('.html'));
const titles = new Set();
const descriptions = new Set();
const indexed = [];
let imageCount = 0;
let localLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(join(directory, file), 'utf8');
  const path = '/' + (file === 'index.html' ? '' : file.replace(/index\.html$/, ''));
  const expectedUrl = origin + base + path;
  const titleMatches = [...html.matchAll(/<title>([^<]+)<\/title>/g)];
  assert.equal(titleMatches.length, 1, `${file}: one title`);
  const title = decode(titleMatches[0][1]);
  assert.ok(!titles.has(title), `${file}: duplicate title`);
  titles.add(title);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${file}: one main heading`);
  assert.match(html, /<html[^>]+lang="de"/, file);
  assert.doesNotMatch(html, /paper-grain|paper-preview/i, file);
  // Hanna's approved biography uses Sopranistin in prose; the brand remains Sopran.
  const header = html.match(/<header class="site-header"[\s\S]*?<\/header>/)?.[0] ?? '';
  assert.doesNotMatch(header, /sopranistin/i, file);
  const meta = [...html.matchAll(/<meta\b([^>]*)>/g)].map(match => attributes(match[1]));
  const getMeta = name => meta.filter(item => item.name === name || item.property === name);
  assert.equal(getMeta('description').length, 1, file);
  const description = getMeta('description')[0].content;
  assert.ok(description?.length > 20, `${file}: meaningful description`);
  assert.ok(!descriptions.has(description), `${file}: duplicate description`);
  descriptions.add(description);
  assert.equal(getMeta('og:title')[0]?.content, title, file);
  assert.equal(getMeta('og:description')[0]?.content, description, file);
  assert.equal(getMeta('twitter:description')[0]?.content, description, file);
  const links = [...html.matchAll(/<link\b([^>]*)>/g)].map(match => attributes(match[1]));
  assert.deepEqual(links.filter(link => link.rel === 'canonical').map(link => link.href), [expectedUrl], file);
  assert.equal(getMeta('og:url')[0]?.content, expectedUrl, file);
  assert.equal(getMeta('robots').length, 1, file);
  const robots = getMeta('robots')[0].content;
  if (!indexable || ['/404.html', '/impressum/', '/datenschutz/'].includes(path) || html.includes('Beispielinhalt für den Entwurf')) {
    assert.match(robots, /noindex/, file);
  } else {
    assert.match(robots, /^index, follow/, file);
    indexed.push(expectedUrl);
  }
  const structured = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  assert.equal(structured.length, 1, file);
  const graph = structured[0]['@graph'];
  assert.ok(graph.some(item => item['@type'] === 'Person' && item.jobTitle === 'Sopran'), file);
  assert.ok(graph.some(item => item['@id'] === expectedUrl + '#webpage' && item.name === title), file);
  for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
    const img = attributes(match[1]);
    assert.ok(img.alt?.trim(), `${file}: descriptive image text`);
    assert.ok(Number(img.width) > 0 && Number(img.height) > 0, `${file}: image dimensions`);
    assert.equal(img.decoding, 'async', file);
    imageCount++;
  }
  // Check published HTML, not only route source, including icons, downloads and hashes.
  for (const match of html.matchAll(/<(?:a|link|img|audio|script)\b([^>]*)>/g)) {
    const attr = attributes(match[1]);
    const target = attr.href ?? attr.src;
    if (!target || /^(?:mailto:|tel:|data:)/i.test(target)) continue;
    const url = new URL(target, expectedUrl);
    if (url.origin !== origin) continue;
    assert.ok(!base || url.pathname.startsWith(base + '/'), `${file}: missing deployment prefix: ${target}`);
    const localPath = decodeURIComponent(url.pathname.slice(base.length));
    const targetFile = join(directory, localPath.replace(/^\//, '') + (localPath.endsWith('/') ? 'index.html' : ''));
    assert.ok(existsSync(targetFile), `${file}: broken target ${target}`);
    if (url.hash && targetFile.endsWith('.html')) {
      const destination = readFileSync(targetFile, 'utf8');
      assert.ok(destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${file}: broken fragment ${target}`);
    }
    localLinks++;
  }
}
const sitemap = readFileSync(join(directory, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1])).sort();
assert.deepEqual(sitemapUrls, indexed.sort(), 'Sitemap must match precisely the indexable pages');
const robots = readFileSync(join(directory, 'robots.txt'), 'utf8');
assert.doesNotMatch(robots, /Disallow: \/\s/);
if (indexable) assert.match(robots, /Sitemap: https:\/\/www\.hannazumsande\.de\/sitemap.xml/);
else assert.doesNotMatch(robots, /Sitemap:/);
const home = readFileSync(join(directory, 'index.html'), 'utf8');
assert.match(home, /<img[^>]*loading="eager"[^>]*fetchpriority="high"/);
for (const [file, size] of [['favicon-96.png', 96], ['apple-touch-icon.png', 180]]) {
  const image = await sharp(join(directory, file)).metadata();
  assert.equal(image.width, size);
  assert.equal(image.height, size);
}
const ico = readFileSync(join(directory, 'favicon.ico'));
assert.equal(ico.readUInt16LE(2), 1);
assert.equal(ico.readUInt16LE(4), 3);
console.log(`SEO checks passed: ${htmlFiles.length} pages, ${indexed.length} sitemap entries, ${imageCount} images, ${localLinks} local links and assets. Mode: ${indexable ? 'production' : 'preview'}.`);
