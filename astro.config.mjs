// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),
  output: 'static'
});