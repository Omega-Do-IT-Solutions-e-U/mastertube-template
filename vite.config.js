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
        index: resolve(__dirname, 'index.html'),
        'main-fa': resolve(__dirname, 'main-fa.html'),
        // 'main-en': resolve(__dirname, 'main-en.html'),
        'services-en': resolve(__dirname, 'services-en.html'),
        'services-fa': resolve(__dirname, 'services-fa.html'),
        'rocket-en': resolve(__dirname, 'rocket-en.html'),
        'rocket-fa': resolve(__dirname, 'rocket-fa.html'),
        'shield-en': resolve(__dirname, 'shield-en.html'),
        'shield-fa': resolve(__dirname, 'shield-fa.html'),
        'dashboard-en': resolve(__dirname, 'dashboard-en.html'),
        'dashboard-fa': resolve(__dirname, 'dashboard-fa.html'),
        'blog-en': resolve(__dirname, 'blog-en.html'),
        'blog-fa': resolve(__dirname, 'blog-fa.html'),
        'single-blog-en': resolve(__dirname, 'single-blog-en.html'),
        'single-blog-fa': resolve(__dirname, 'single-blog-fa.html'),
        'privacy-policy-en': resolve(__dirname, 'privacy-policy-en.html'),
        'privacy-policy-fa': resolve(__dirname, 'privacy-policy-fa.html'),
        'terms-of-service-en': resolve(__dirname, 'terms-of-service-en.html'),
        'terms-of-service-fa': resolve(__dirname, 'terms-of-service-fa.html'),
        'logo-en': resolve(__dirname, 'logo-en.html'),
        'logo-fa': resolve(__dirname, 'logo-fa.html'),
        'not-found-en': resolve(__dirname, 'not-found-en.html'),
        'not-found-fa': resolve(__dirname, 'not-found-fa.html')
      }
    }
  },
  assetsInclude: ['/**/*.woff2']
});
