export enum ErrorType {
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  AUTHORIZATION = 'AUTHORIZATION',
  NOT_FOUND = 'NOT_FOUND',
  SERVER = 'SERVER',
  CLIENT = 'CLIENT',
  UNKNOWN = 'UNKNOWN',
}

export class AppError extends Error {
  constructor(
    message: string,
    public type: ErrorType = ErrorType.UNKNOWN,
    public statusCode?: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'AppError';
    Object.setPrototypeOf(this, AppError.prototype);
  }

  isRetryable(): boolean {
    return [ErrorType.NETWORK, ErrorType.SERVER].includes(this.type);
  }

  getUserMessage(): string {
    const messages: Record<ErrorType, string> = {
      [ErrorType.NETWORK]: 'Whats Wrong With Your Internet Connection?',
      [ErrorType.VALIDATION]: 'Please check your input and try again.',
      [ErrorType.AUTHORIZATION]: 'Wait A Minute! Who Are You?',
      [ErrorType.NOT_FOUND]: 'The requested resource was not found.',
      [ErrorType.SERVER]: 'A server error occurred. Please try again later.',
      [ErrorType.CLIENT]: this.message,
      [ErrorType.UNKNOWN]: 'An unexpected error occurred. Please try again.',
    };
    return messages[this.type] || this.message;
  }
}

export function classifyError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof TypeError && error.message.includes('fetch')) {
    return new AppError('Network request failed', ErrorType.NETWORK, 0, error);
  }

  if (error && typeof error === 'object' && 'status' in error) {
    const statusCode = (error as { status: number }).status;

    if (statusCode === 401 || statusCode === 403) {
      return new AppError('Unauthorized access', ErrorType.AUTHORIZATION, statusCode, error);
    }

    if (statusCode === 404) {
      return new AppError('Resource not found', ErrorType.NOT_FOUND, statusCode, error);
    }

    if (statusCode >= 500) {
      return new AppError('Server error', ErrorType.SERVER, statusCode, error);
    }

    if (statusCode >= 400) {
      return new AppError('Client error', ErrorType.CLIENT, statusCode, error);
    }
  }

  const message = error instanceof Error ? error.message : 'Unknown error';
  return new AppError(message, ErrorType.UNKNOWN, undefined, error);
}

