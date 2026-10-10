import { defineConfig as testConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

const config = defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#app',
        additionalPrerenderRoutes: ['/404'],
        previewMiddlewareEnabled: true,
        previewMiddlewareFallback: '/404',
      },
    }),
  ],
});

const tstConfig = testConfig({
  test: {
    environment: 'happy-dom',
  },
});

export default {
  ...config,
  ...tstConfig,
};
