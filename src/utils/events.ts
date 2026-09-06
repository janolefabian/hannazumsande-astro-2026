type EventInformation = {
  body?: string;
  data: { link?: string | null; photo?: string | null };
};

export const eventLink = (event: EventInformation): string | undefined => {
  const link = event.data.link?.trim();
  if (!link) return undefined;
  try {
    const url = new URL(link);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : undefined;
  } catch {
    return undefined;
  }
};

export const hasEventDescription = (event: EventInformation): boolean => Boolean(
  event.body
    ?.replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&(?:nbsp|#160|#xA0);/gi, ' ')
    .replace(/[\s\u200B-\u200D\uFEFF*_#>~-]/g, ''),
);

export const eventPhoto = (event: EventInformation): string | undefined =>
  event.data.photo?.trim() || undefined;

export const hasEventDetails = (event: EventInformation): boolean =>
  hasEventDescription(event) || Boolean(eventLink(event)) || Boolean(eventPhoto(event));

export const eventDetailPath = (event: { id: string }): string =>
  '/termine/' + event.id.split('/').map(encodeURIComponent).join('/') + '/';
