import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { pageMeta } from '../data/seo';
import { eventDetailPath, hasEventDetails } from '../utils/events';
import { withBase } from '../utils/paths';
import { allowIndexing, escapeXml } from '../utils/seo';

export const GET: APIRoute = async ({ site }) => {
  const events = await getCollection('termine', ({ data }) => data.published && !data.example);
  const paths = allowIndexing(site) ? [
    ...Object.keys(pageMeta).filter(path => pageMeta[path].index !== false),
    ...events.filter(hasEventDetails).map(eventDetailPath),
  ] : [];
  const entries = [...new Set(paths)].map(path => `<url><loc>${escapeXml(new URL(withBase(path), site).href)}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
