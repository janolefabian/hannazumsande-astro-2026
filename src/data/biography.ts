import biography from './biography.json';
export const biographyParagraphs = biography.body.trim().split(/\n\s*\n/).filter(Boolean);
export const biographyIntro = biographyParagraphs[0] ?? '';
export const biographyHeading = biography.homeHeading;
