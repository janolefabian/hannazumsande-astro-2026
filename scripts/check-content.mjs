import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
const config = yaml.load(readFileSync('.pages.yml', 'utf8'));
const json = path => JSON.parse(readFileSync(path, 'utf8'));
const media = new Set(config.media.map(item => item.name));
const names = config.content.map(item => item.name);
assert.equal(new Set(names).size, names.length, 'CMS section names must be unique');
const checkFields = (fields, data, context) => {
  const keys = fields.map(field => field.name);
  assert.equal(new Set(keys).size, keys.length, context + ': duplicate field');
  for (const field of fields) {
    const value = data[field.name];
    if (field.required) assert.ok(value !== undefined && value !== null && value !== '', context + '.' + field.name + ' is required');
    if (field.options?.media) assert.ok(media.has(field.options.media), 'Unknown media collection');
    if (field.pattern && value) {
      assert.match(value, new RegExp(field.pattern.regex ?? field.pattern), context + '.' + field.name);
    }
    if (field.fields && value) {
      for (const item of Array.isArray(value) ? value : [value]) checkFields(field.fields, item, context + '.' + field.name);
    }
  }
};
for (const item of config.content) {
  assert.ok(existsSync(item.path), 'Missing CMS path ' + item.path);
  if (item.type === 'file' && item.format === 'json') checkFields(item.fields, json(item.path), item.name);
  if (item.type === 'collection' && item.format === 'json') {
    for (const name of readdirSync(item.path).filter(name => name.endsWith('.json'))) checkFields(item.fields, json(join(item.path, name)), item.name + '/' + name);
  }
}
const localAsset = src => {
  if (!src || /^https?:\/\//.test(src)) return;
  assert.ok(src.startsWith('/'), 'Expected root-relative asset path: ' + src);
  assert.ok(existsSync(join('public', src)), 'Missing asset: ' + src);
};
const photos = json('src/data/images.json');
for (const entry of Object.values(photos)) {
  for (const photo of Array.isArray(entry) ? entry : [entry]) {
    assert.ok(photo.alt.trim());
    assert.ok(photo.credit.trim());
    localAsset(photo.src);
    localAsset(photo.download);
  }
}
const downloads = json('src/data/downloads.json');
Object.values(downloads).forEach(localAsset);
const biography = json('src/data/biography.json');
assert.ok(biography.body.split(/\n\s*\n/).filter(Boolean).length > 1, 'Keep readable biography paragraphs');
const cdPaths = readdirSync('src/content/cds').filter(name => name.endsWith('.json'));
for (const path of cdPaths) {
  const cd = json(join('src/content/cds', path));
  localAsset(cd.cover);
  assert.ok(!cd.conductor || !/^Leitung\s*:/i.test(cd.conductor), 'Store only the conductor name');
  if (cd.year != null) assert.ok(Number.isInteger(cd.year) && cd.year >= 1900 && cd.year <= 2100);
}
console.log('Content checks passed: ' + config.content.length + ' CMS sections, ' + cdPaths.length + ' CDs, all photo and PDF paths valid.');
