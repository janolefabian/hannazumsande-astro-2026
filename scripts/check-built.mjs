import { execFileSync } from 'node:child_process';

const github = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'hannazumsande-astro-2026';
const site = process.env.SITE_URL || (github ? 'https://janolefabian.github.io' : 'https://www.hannazumsande.de');
const base = process.env.SITE_BASE || (github ? `/${repository}` : '/');
const args = ['scripts/check-seo.mjs', '--site', site, '--base', base];
if (site === 'https://www.hannazumsande.de' && base === '/' && process.env.PUBLIC_ALLOW_INDEXING === 'true') args.push('--indexable');
args.push(...process.argv.slice(2));
execFileSync(process.execPath, args, { stdio: 'inherit' });
