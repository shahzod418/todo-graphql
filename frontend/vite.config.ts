import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@graphql': resolve('src/graphql'),
      '@pages': resolve('src/pages'),
      '@features': resolve('src/features'),
      '@entities': resolve('src/entities'),
      '@locales': resolve('src/locales'),
      '@config': resolve('src/shared/config'),
      '@hooks': resolve('src/shared/hooks'),
    },
  },
  build: {
    watch: {
      include: resolve('../schema.gql'),
    },
  },
});
