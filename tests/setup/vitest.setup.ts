import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import React from 'react';

// Mock framer-motion for tests
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        const Component = ({ children, ...props }: any) =>
          React.createElement(prop as string, props, children);
        return Component;
      },
    }
  ),
  AnimatePresence: ({ children }: any) => children,
}));

// Cleanup after each test
afterEach(() => {
  cleanup();
});
