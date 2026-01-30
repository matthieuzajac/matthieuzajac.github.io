import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.date(),
  }),
});

const extracurriculars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    award: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = { projects, extracurriculars };