import sanitizeHtml from 'sanitize-html';

/** @param {unknown} value */
const text = value => typeof value === 'string' ? value.trim() : '';

/** @param {string | undefined} site */
export function isFinalDomain(site) {
  try { return ['hannazumsande.de', 'www.hannazumsande.de'].includes(new URL(site ?? '').hostname); }
  catch { return false; }
}

/** @param {Record<string, unknown>} provider */
export const missingLegalAddressFields = provider =>
  Object.entries({ name: 'Anbietername', street: 'Straße und Hausnummer', postalCode: 'Postleitzahl', city: 'Ort', country: 'Land' })
    .filter(([key]) => !text(provider[key])).map(([, label]) => label);

export const draftNoticePattern = /Vorläufiger Stand|Vor Veröffentlichung prüfen|Noch zu ergänzen|Beispielinhalt für den Entwurf|werden ergänzt|Informationen zu Karten und Einlass folgen|später eingesetzten Hosting/i;

/** @param {Record<string, unknown>} provider */
export const legalAddressLines = provider => [
  text(provider.addressExtra),
  text(provider.street),
  [text(provider.postalCode), text(provider.city)].filter(Boolean).join(' '),
  text(provider.country),
].filter(Boolean);

/**
 * Editor HTML is cleaned at build time. No scripts, embedded media or CSS.
 * @param {unknown} value
 * @param {{ withBase?: (path: string) => string, youtubeAnchor?: boolean }} options
 */
export function renderLegalBody(value, { withBase = path => path, youtubeAnchor = false } = {}) {
  let html = sanitizeHtml(text(value), {
    allowedTags: ['h2', 'h3', 'h4', 'p', 'br', 'strong', 'b', 'em', 'i', 'u', 's', 'ul', 'ol', 'li', 'blockquote', 'a', 'hr'],
    allowedAttributes: { a: ['href', 'title', 'rel'] },
    allowedSchemes: ['https', 'http', 'mailto', 'tel'],
    allowProtocolRelative: false,
    transformTags: {
      h1: 'h2',
      a: (tagName, attribs) => {
        const href = attribs.href?.trim() ?? '';
        // Rewrite only site-relative URLs. Unsafe schemes remain for sanitization.
        const isLocal = href.startsWith('/') && !href.startsWith('//');
        return { tagName, attribs: { ...attribs, href: isLocal ? withBase(href) : href, rel: 'noopener noreferrer' } };
      },
    },
  });
  if (youtubeAnchor) {
    let anchored = false;
    html = html.replace(/<(h[2-4])>([\s\S]*?)<\/\1>/g, (heading, tag, body) => {
      if (anchored || !/youtube/i.test(body.replace(/<[^>]*>/g, ''))) return heading;
      anchored = true;
      return `<${tag} id="youtube">${body}</${tag}>`;
    });
    // Keep existing video-consent links usable if the editor renames the heading.
    if (!anchored) html = '<span id="youtube"></span>' + html;
  }
  return html;
}

/** @param {unknown} value */
const hasBody = value => Boolean(sanitizeHtml(text(value), { allowedTags: [], allowedAttributes: {} }).replace(/&(?:nbsp|#160);/gi, ' ').trim());

/**
 * These are completeness checks, not a legal assessment.
 * @param {{ provider?: Record<string, unknown>, imprintBody?: unknown, privacyBody?: unknown, imprintReviewed?: boolean, privacyReviewed?: boolean }} legal
 * @param {{ email?: string }} settings
 * @param {{ title: string, example?: boolean, published?: boolean, body?: string }[]} events
 */
export function legalLaunchIssues(legal, settings, events = []) {
  const provider = legal.provider ?? {};
  const issues = [];
  for (const label of missingLegalAddressFields(provider)) issues.push(`${label} unter Rechtliches ergänzen.`);
  if (!text(settings.email)) issues.push('E-Mail-Adresse unter Grunddaten ergänzen.');
  if (!hasBody(legal.imprintBody)) issues.push('Impressumtext ergänzen.');
  if (!hasBody(legal.privacyBody)) issues.push('Datenschutztext ergänzen.');
  if (legal.imprintReviewed !== true) issues.push('Impressum abschließend prüfen und im Backend freigeben.');
  if (legal.privacyReviewed !== true) issues.push('Datenschutz mit dem tatsächlichen Hosting und den eingebundenen Diensten abgleichen und freigeben.');
  if (draftNoticePattern.test(text(legal.imprintBody)) || draftNoticePattern.test(text(legal.privacyBody))) issues.push('Entwurfshinweise aus den freigegebenen Rechtstexten entfernen.');
  for (const event of events) {
    if (event.published !== false && event.example) issues.push(`Kalender-Beispiel prüfen oder ausblenden: ${event.title}`);
    else if (event.published !== false && draftNoticePattern.test(text(event.body))) issues.push(`Entwurfshinweis im Kalender entfernen: ${event.title}`);
  }
  return issues;
}
