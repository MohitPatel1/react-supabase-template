import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { server } from './server';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Setup MSW
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Extend expect with custom matchers
expect.extend({
  toBeInTheDocument: expect.toBeInTheDocument,
  toHaveTextContent: expect.toHaveTextContent,
  toHaveAttribute: expect.toHaveAttribute,
});
