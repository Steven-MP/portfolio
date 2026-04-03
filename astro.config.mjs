// @ts-check
import { defineConfig } from 'astro/config';
import viteCompression from 'vite-plugin-compression';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'static',

  vite: {
    plugins: [
      viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
      viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    ],
  },

  adapter: cloudflare()
});