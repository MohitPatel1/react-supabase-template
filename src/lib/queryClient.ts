import { ErrorType, classifyError } from '@/utils/errorHandling';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        const appError = classifyError(error);

        if ([ErrorType.AUTHORIZATION, ErrorType.VALIDATION].includes(appError.type)) {
          return false;
        }

        if (appError.isRetryable() && failureCount < 3) {
          return true;
        }

        return false;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      const appError = classifyError(error);
      console.error(`Query error [${query.queryHash}]:`, appError);

      if (appError.type === ErrorType.AUTHORIZATION) {
        window.location.href = '/login';
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      const appError = classifyError(error);
      console.error(`Mutation error [${mutation.options.mutationKey}]:`, appError);

      if (appError.statusCode === 409) {
        console.log('Conflict detected, refresh data');
      }
    },
  }),
});
