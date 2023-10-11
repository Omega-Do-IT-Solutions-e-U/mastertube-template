import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'about-fa': resolve(__dirname, 'about-us-fa.html'),
        'about-en': resolve(__dirname, 'about-us-en.html'),
        'cashout-en': resolve(__dirname, 'cashout-en.html'),
        'cashout-fa': resolve(__dirname, 'cashout-fa.html'),
        main: resolve(__dirname, 'index.html'),
        'services-fa': resolve(__dirname, 'services-fa.html')
      }
    }
  },
  assetsInclude: ['/**/*.woff2']
});
