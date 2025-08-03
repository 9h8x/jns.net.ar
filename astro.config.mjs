// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),
  output: 'static'
});