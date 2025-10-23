import { http, HttpResponse } from 'msw';

export const handlers = [
  // Example handlers - add your API mocks here
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok' });
  }),
];
