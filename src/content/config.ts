import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    highlights: z.array(z.string()),
    technologies: z.array(z.string()),
    link: z.string().optional(),
    order: z.number(),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    companyLogo: z.string(),
    role: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    order: z.number(),
  }),
});

const achievementsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = {
  projects: projectsCollection,
  experience: experienceCollection,
  achievements: achievementsCollection,
};
