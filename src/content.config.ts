import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each post is a Markdown file in src/content/blog/. The file name becomes the URL:
// src/content/blog/my-first-post.md  ->  /blog/my-first-post/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Drafts show up in `npm run dev` but are left out of the published site.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
