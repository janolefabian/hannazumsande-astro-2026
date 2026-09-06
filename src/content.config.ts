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

export const collections = { termine };
