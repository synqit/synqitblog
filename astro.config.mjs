// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://synqit.github.io',
	base: import.meta.env.PROD ? '/synqitblog-pages' : '/',
	integrations: [mdx(), sitemap()],
});
