// content.config.ts
// NOTE: as of Astro 5's Content Layer API, this file lives at
// src/content.config.ts — NOT src/content/config.ts. Collections also
// need an explicit loader now instead of the old `type: 'content'`
// shorthand, which is why glob() shows up below.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guide = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guide' }),
  schema: z.object({
    stepNum: z.number(),
    title: z.string(),
    sub: z.string(),
    accent: z.string(),
    prevHref: z.string().optional(),
    prevLabel: z.string().optional(),
    nextHref: z.string().optional(),
    nextLabel: z.string().optional(),
    isSubmit: z.boolean().optional(),
  }),
});

export const collections = { guide };