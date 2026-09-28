import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const termine = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/termine' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string(),
    venue: z.string(),
    city: z.string().optional(),
    link: z.string().nullish(),
    photo: z.string().nullish(),
    photoAlt: z.string().nullish(),
    photoCredit: z.string().nullish(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    example: z.boolean().default(false),
  }),
});

const cds = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/cds' }),
  schema: z.object({
    title: z.string().min(1),
    subtitle: z.string().nullish(),
    artists: z.string().nullish(),
    conductor: z.string().nullish(),
    label: z.string().nullish(),
    year: z.number().int().min(1900).max(2100).nullish(),
    cover: z.string().min(1),
    link: z.string().nullish().refine(value => !value || /^https?:\/\//i.test(value), 'Bitte einen vollständigen Link mit https:// eintragen.'),
    published: z.boolean().default(true),
    order: z.number().nullish().transform(value => value ?? 0),
  }),
});

export const collections = { termine, cds };
