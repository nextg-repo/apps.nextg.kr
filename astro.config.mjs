// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site:"https://apps.nextg.kr",
  
  integrations: [react()],

  redirects: {
    '/massage': '/app/massage/',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
