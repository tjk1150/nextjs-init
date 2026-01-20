import { AxiosError } from 'axios'

export interface ApiError {
  message: string
  code: string
  status: number
  details?: Record<string, unknown>
}

export function createApiError(error: AxiosError<{ message?: string; code?: string }>): ApiError {
  const status = error.response?.status ?? 500
  const message = error.response?.data?.message ?? getDefaultErrorMessage(status)
  const code = error.response?.data?.code ?? getDefaultErrorCode(status)

  return {
    message,
    code,
    status,
    details: error.response?.data as Record<string, unknown> | undefined,
  }
}

function getDefaultErrorMessage(status: number): string {
  const messages: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    422: 'Validation Error',
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
  }

  return messages[status] ?? 'Unknown Error'
}

function getDefaultErrorCode(status: number): string {
  const codes: Record<number, string> = {
    400: 'BAD_REQUEST',
    401: 'UNAUTHORIZED',
    403: 'FORBIDDEN',
    404: 'NOT_FOUND',
    409: 'CONFLICT',
    422: 'VALIDATION_ERROR',
    429: 'RATE_LIMITED',
    500: 'INTERNAL_ERROR',
    502: 'BAD_GATEWAY',
    503: 'SERVICE_UNAVAILABLE',
  }

  return codes[status] ?? 'UNKNOWN_ERROR'
}

export function isApiError(error: unknown): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'code' in error &&
    'status' in error
  )
}
