// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import viteCompression from 'vite-plugin-compression';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  vite: {
    plugins: [
      viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
      viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    ],
  },
});
