import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setupTests.ts',
    include: ['./src/**/*.{spec,test}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watch: {
      ignored: [
        String.raw`.*\/node_modules\/.*`,
        String.raw`.*\/build\/.*`,
        String.raw`.*\/postgres-data\/.*`,
      ],
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});