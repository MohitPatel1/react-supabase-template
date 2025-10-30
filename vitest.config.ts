import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      root: './',
      projects: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.vitest.json'],
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup/vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.config.ts',
        '**/types/',
        '**/*.d.ts',
        '**/mocks/',
        '**/__mocks__/',
        'src/main.tsx',
      ],
      thresholds: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
        './src/services/': {
          statements: 95,
          branches: 90,
          functions: 95,
          lines: 95,
        },
        './src/hooks/': {
          statements: 90,
          branches: 85,
          functions: 90,
          lines: 90,
        },
        './src/utils/': {
          statements: 95,
          branches: 90,
          functions: 95,
          lines: 95,
        },
      },
    },
  },
});

