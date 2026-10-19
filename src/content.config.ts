import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
	schema: z.object({
		title: z.string(),
		dek: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		accent: z.enum(['teal', 'purple', 'blue', 'neutral']).default('neutral'),
		tags: z.array(z.string()).default([]),
		externalUrl: z.string().url().optional(),
	}),
});

export const collections = { caseStudies };
