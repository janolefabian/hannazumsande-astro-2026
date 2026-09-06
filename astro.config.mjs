// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'hannazumsande-astro-2026';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || (isGitHubPages ? 'https://janolefabian.github.io' : 'https://www.hannazumsande.de'),
	base: process.env.SITE_BASE || (isGitHubPages ? `/${repository}` : '/'),
	trailingSlash: 'always',
});
