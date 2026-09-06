import type { APIRoute } from 'astro';
import { allowIndexing } from '../utils/seo';
import { withBase } from '../utils/paths';

export const GET: APIRoute = ({ site }) => {
  // Crawling must remain allowed so crawlers can read the preview's noindex tags.
  const sitemap = allowIndexing(site) ? `Sitemap: ${new URL(withBase('/sitemap.xml'), site)}\n` : '';
  return new Response(`User-agent: *\nAllow: /\n${sitemap}`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
