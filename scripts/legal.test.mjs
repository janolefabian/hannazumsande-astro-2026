import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { isFinalDomain, legalAddressLines, legalLaunchIssues, missingLegalAddressFields, renderLegalBody } from '../src/utils/legal.mjs';

const legal = JSON.parse(readFileSync(new URL('../src/data/legal.json', import.meta.url), 'utf8'));
const provider = { name: 'Testname', street: 'Beispielstraße 1', addressExtra: 'Büro', postalCode: '12345', city: 'Beispielstadt', country: 'Deutschland' };
const ready = { provider, imprintBody: '<h2>Angaben</h2><p>Geprüfter Testtext.</p>', privacyBody: '<h2>Datenschutz</h2><p>Geprüfter Testtext.</p>', imprintReviewed: true, privacyReviewed: true };
const settings = { email: 'test@example.invalid' };

test('shared address keeps complete values and omits empty lines', () => {
  assert.deepEqual(legalAddressLines(provider), ['Büro', 'Beispielstraße 1', '12345 Beispielstadt', 'Deutschland']);
  assert.deepEqual(legalAddressLines({ street: null, postalCode: '22297', city: ' Hamburg ', country: 'Deutschland' }), ['22297 Hamburg', 'Deutschland']);
  assert.deepEqual(missingLegalAddressFields(provider), []);
  assert.deepEqual(missingLegalAddressFields({ ...provider, street: ' ' }), ['Straße und Hausnummer']);
});

test('rich text keeps formatting, not executable markup or editor styles', () => {
  const html = renderLegalBody('<h1>Überschrift</h1><p style="color:red" onclick="alert(1)"><strong>Text</strong><br><em>kursiv</em></p><ul><li>Liste</li></ul><script>alert(1)</script><iframe src="https://example.invalid"></iframe><img src=x onerror="alert(1)">');
  assert.match(html, /<h2>Überschrift<\/h2>/);
  assert.match(html, /<strong>Text<\/strong>/);
  assert.match(html, /<li>Liste<\/li>/);
  assert.doesNotMatch(html, /h1|onclick|onerror|style=|script|iframe|<img|alert\(/);
});

test('links keep safe targets and reject executable schemes', () => {
  const html = renderLegalBody('<a href="javascript:alert(1)">bad</a><a href="data:text/html,bad">bad</a><a href="//example.invalid">protocol relative</a><a href="https://example.invalid/a">good</a><a href="mailto:test@example.invalid">mail</a><a href="/kontakt/">local</a>', { withBase: path => '/test-base' + path });
  assert.doesNotMatch(html, /href="(?:javascript:|data:|\/\/)/);
  assert.match(html, /href="https:\/\/example.invalid\/a"/);
  assert.match(html, /href="mailto:test@example.invalid"/);
  assert.match(html, /href="\/test-base\/kontakt\/"/);
});

test('YouTube anchor survives editor saves and renamed headings', () => {
  for (const source of ['<h2>YouTube-Videos</h2><p>Text</p>', '<h2><strong>YouTube</strong></h2><h3>YouTube</h3>', '<h2>Andere Überschrift</h2>']) {
    const html = renderLegalBody(source, { youtubeAnchor: true });
    assert.equal((html.match(/id="youtube"/g) ?? []).length, 1);
  }
  assert.match(renderLegalBody(legal.privacyBody, { youtubeAnchor: true }), /<h2 id="youtube">YouTube-Videos<\/h2>/);
});

test('final domain detection does not mistake preview URLs for launch', () => {
  for (const url of ['https://www.hannazumsande.de', 'https://hannazumsande.de/']) assert.equal(isFinalDomain(url), true);
  for (const url of [undefined, '', 'http://127.0.0.1:4321/', 'https://janolefabian.github.io/hannazumsande-astro-2026/', 'https://hannazumsande.de.example.invalid/']) assert.equal(isFinalDomain(url), false);
});

test('release requires complete address, content and explicit review', () => {
  assert.deepEqual(legalLaunchIssues(ready, settings), []);
  assert.ok(legalLaunchIssues({ ...ready, provider: { ...provider, street: '' } }, settings).some(issue => issue.includes('Straße')));
  assert.ok(legalLaunchIssues({ ...ready, privacyReviewed: false }, settings).some(issue => issue.includes('Datenschutz')));
  assert.ok(legalLaunchIssues({ ...ready, imprintBody: '<p>&nbsp;</p>' }, settings).some(issue => issue.includes('Impressumtext')));
  assert.ok(legalLaunchIssues({ ...ready, imprintBody: 'Vorläufiger Stand' }, settings).some(issue => issue.includes('Entwurfshinweise')));
  assert.ok(legalLaunchIssues(ready, { email: '' }).some(issue => issue.includes('E-Mail')));
});

test('example flags and forgotten draft copy stop final publication', () => {
  assert.equal(legalLaunchIssues(ready, settings, [{ title: 'Beispiel', example: true }]).length, 1);
  assert.equal(legalLaunchIssues(ready, settings, [{ title: 'Beispiel', example: true, published: false }]).length, 0);
  assert.equal(legalLaunchIssues(ready, settings, [{ title: 'Termin', body: 'Weitere Angaben werden ergänzt.' }]).length, 1);
});

test('normal preview build can run without granting final approval', () => {
  const result = spawnSync(process.execPath, ['scripts/check-launch.mjs'], { env: { ...process.env, SITE_URL: 'https://janolefabian.github.io' }, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Vorschaubuild/);
});
