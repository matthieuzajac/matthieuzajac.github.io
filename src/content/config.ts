import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    date: z.number(),
    tags: z.array(z.string()).default([]),
  }),
});

const extracurriculars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    date: z.number(),
    award: z.string().optional(), 
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, extracurriculars };