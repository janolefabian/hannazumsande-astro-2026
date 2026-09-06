export const allowIndexing = (site?: URL) =>
  import.meta.env.PROD && import.meta.env.PUBLIC_ALLOW_INDEXING === 'true' &&
  site?.origin === 'https://www.hannazumsande.de' && import.meta.env.BASE_URL === '/';

export const jsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
export const escapeXml = (value: string) => value.replace(/[<>&"']/g, character => ({
  '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
}[character]!));
