import assert from 'node:assert/strict';
import test from 'node:test';
import { legacyPages, legacyEvents, legacyRedirects } from '../src/data/legacy-urls.mjs';

test('Old page URLs have safe, explicit destinations, without login or catch-all redirects', () => {
  const redirects = legacyRedirects();
  assert.equal(Object.keys(redirects).length, 27);
  for (const [source, target] of Object.entries(redirects)) {
    assert.match(source, /^\/[a-z0-9/.-]+\.html$/);
    assert.match(target, /^\/[a-z0-9/#-]+$/);
    assert.ok(!target.startsWith('//'));
    assert.notEqual(source, target);
  }
  assert.equal(redirects['/vita.html'], '/vita/');
  assert.equal(redirects['/login.html'], undefined);
  assert.equal(redirects['/index.php'], undefined);
  assert.equal(Object.keys(legacyPages).length, 13);
});

test('Published concerts resolve to detail pages or their exact calendar entry', () => {
  const entries = Object.entries(legacyEvents);
  const targets = new Map(entries.map(([, id], i) => [id,
    i % 2 ? '/termine/#termin-' + id : '/termine/' + id + '/',
  ]));
  const redirects = legacyRedirects(targets);
  for (const [oldPath, id] of entries) assert.equal(redirects[oldPath], targets.get(id));
});

test('Removed or unpublished concerts use the calendar instead of a broken detail link', () => {
  const redirects = legacyRedirects(new Map());
  for (const oldPath of Object.keys(legacyEvents)) assert.equal(redirects[oldPath], '/termine/');
});
