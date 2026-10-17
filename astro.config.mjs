// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// O site é o domínio, mesmo durante a prévia em smartadvtech.github.io: o canonical e o sitemap já apontam para ele
export default defineConfig({
  site: 'https://smartadvtech.com.br',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
