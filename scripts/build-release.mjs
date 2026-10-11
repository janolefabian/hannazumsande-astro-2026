import { spawnSync } from 'node:child_process';

// This only builds locally. It never changes DNS, Pages settings or the CMS.
const env = {
  ...process.env,
  SITE_URL: 'https://www.hannazumsande.de',
  SITE_BASE: '/',
  PUBLIC_ALLOW_INDEXING: 'true',
};
for (const task of ['test:launch', 'test:legal', 'test:redirects', 'test:content', 'build', 'test:built']) {
  const result = spawnSync('npm', ['run', task], { env, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
console.log('Domain-Build vollständig geprüft. dist/ wurde lokal erstellt, nichts veröffentlicht.');
