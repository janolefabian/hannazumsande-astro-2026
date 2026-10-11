import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { legacyRedirects } from '../data/legacy-urls.mjs';
import { eventDetailPath, hasEventDetails } from '../utils/events';
import { withBase } from '../utils/paths';
import { allowIndexing, escapeXml } from '../utils/seo';

export async function getStaticPaths() {
  const events = await getCollection('termine', ({ data }) => data.published && !data.example);
  const targets = new Map(events.map(event => [event.id, hasEventDetails(event)
    ? eventDetailPath(event)
    : '/termine/#termin-' + encodeURIComponent(event.id)]));
  return Object.entries(legacyRedirects(targets)).map(([oldPath, destination]) => ({
    params: { legacy: oldPath.slice(1, -5) },
    props: { destination },
  }));
}

// GitHub Pages serves static HTML, not HTTP 301 rules. Immediate meta refresh
// works without JavaScript. The visible link is a fallback for restrictive clients.
export const GET: APIRoute = ({ props, site }) => {
  const target = escapeXml(withBase(props.destination));
  const canonicalUrl = new URL(withBase(props.destination), site);
  canonicalUrl.hash = '';
  const canonical = escapeXml(canonicalUrl.href);
  const robots = allowIndexing(site) ? '' : '<meta name="robots" content="noindex, follow">';
  return new Response(`<!doctype html>
<html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Weiterleitung | Hanna Zumsande</title>
<meta http-equiv="refresh" content="0;url=${target}">
<link rel="canonical" href="${canonical}">${robots}
</head><body><h1>Diese Seite ist umgezogen</h1>
<p><a href="${target}">Zur neuen Seite von Hanna Zumsande</a></p>
</body></html>`, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
};
