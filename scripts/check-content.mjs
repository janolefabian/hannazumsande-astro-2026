import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import yaml from 'js-yaml';
import { draftNoticePattern } from '../src/utils/legal.mjs';
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
  if (item.type === 'collection' && item.format === 'yaml-frontmatter') {
    for (const name of readdirSync(item.path).filter(name => name.endsWith('.md'))) {
      assert.match(name, /^\d{4}-\d{2}-\d{2}-.+\.md$/, 'Meaningful event filename required: ' + name);
      const source = readFileSync(join(item.path, name), 'utf8');
      const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
      assert.ok(frontmatter, 'Missing event frontmatter: ' + name);
      const data = yaml.load(frontmatter[1]);
      checkFields(item.fields, data, item.name + '/' + name);
      assert.ok(!Number.isNaN(new Date(data.date).getTime()), 'Invalid event date: ' + name);
      if (data.published !== false) {
        assert.notEqual(data.example, true, 'Published example content: ' + name);
        assert.doesNotMatch(source.slice(frontmatter[0].length), draftNoticePattern, 'Draft text in event: ' + name);
      }
    }
  }
}
// Pages CMS must generate from submitted values, not the initially empty form.
for (const name of ['termine', 'cds']) {
  const collection = config.content.find(item => item.name === name);
  assert.equal(collection.filename.field, false, name + ': generate filenames on save');
  assert.ok(collection.filename.template.includes('{primary}'), name + ': meaningful filename');
}
const calendar = config.content.find(item => item.name === 'termine');
assert.equal(calendar.filename.template, '{fields.date}-{fields.time}-{primary}.md', 'Separate performances on the same day');
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
for (const name of readdirSync('src/content/termine').filter(name => name.endsWith('.md'))) {
  const source = readFileSync(join('src/content/termine', name), 'utf8');
  const data = yaml.load(source.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);
  localAsset(data.photo);
}
const biography = json('src/data/biography.json');
const legal = json('src/data/legal.json');
const legalConfig = config.content.find(item => item.name === 'legal');
assert.equal(legalConfig?.label, 'Rechtliches');
assert.equal(legalConfig.path, 'src/data/legal.json');
for (const key of ['imprintBody', 'privacyBody']) {
  assert.ok(legal[key]?.trim(), key + ' must contain text');
  const field = legalConfig.fields.find(field => field.name === key);
  assert.equal(field.type, 'rich-text');
  assert.equal(field.options.format, 'html');
  assert.equal(field.options.media, false);
}
for (const key of ['imprintReviewed', 'privacyReviewed']) assert.equal(typeof legal[key], 'boolean');
assert.ok(biography.body.split(/\n\s*\n/).filter(Boolean).length > 1, 'Keep readable biography paragraphs');
const cdPaths = readdirSync('src/content/cds').filter(name => name.endsWith('.json'));
for (const path of cdPaths) {
  const cd = json(join('src/content/cds', path));
  localAsset(cd.cover);
  assert.ok(!cd.conductor || !/^Leitung\s*:/i.test(cd.conductor), 'Store only the conductor name');
  if (cd.year != null) assert.ok(Number.isInteger(cd.year) && cd.year >= 1900 && cd.year <= 2100);
}
console.log('Content checks passed: ' + config.content.length + ' CMS sections, ' + cdPaths.length + ' CDs, all events and local media valid.');
