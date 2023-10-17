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
        'main-fa': resolve(__dirname, 'main-fa.html'),
        'services-en': resolve(__dirname, 'services-en.html'),
        'services-fa': resolve(__dirname, 'services-fa.html'),
        'blog-en': resolve(__dirname, 'blog-en.html'),
        'blog-fa': resolve(__dirname, 'blog-fa.html'),
        'single-blog-en': resolve(__dirname, 'single-blog-en.html'),
        'single-blog-fa': resolve(__dirname, 'single-blog-fa.html'),
        'privacy-policy-en': resolve(__dirname, 'privacy-policy-en.html'),
        'privacy-policy-fa': resolve(__dirname, 'privacy-policy-fa.html'),
        'terms-of-service-en': resolve(__dirname, 'terms-of-service-en.html'),
        'terms-of-service-fa': resolve(__dirname, 'terms-of-service-fa.html')
      }
    }
  },
  assetsInclude: ['/**/*.woff2']
});
