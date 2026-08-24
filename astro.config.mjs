// @ts-check
import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'hannazumsande-astro-2026';

// https://astro.build/config
export default defineConfig({
	site: isGitHubPages ? 'https://janolefabian.github.io' : 'https://www.hannazumsande.de',
	base: isGitHubPages ? `/${repository}` : '/',
	trailingSlash: 'always',
});
