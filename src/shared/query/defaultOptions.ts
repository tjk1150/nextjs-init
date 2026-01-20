import { DefaultOptions } from '@tanstack/react-query'

import { isApiError } from '@/shared/api'

export const defaultQueryOptions: DefaultOptions['queries'] = {
  staleTime: 1000 * 60 * 5, // 5 minutes
  gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
  retry: (failureCount, error) => {
    if (isApiError(error)) {
      if (error.status === 401 || error.status === 403 || error.status === 404) {
        return false
      }
    }
    return failureCount < 3
  },
  refetchOnWindowFocus: false,
  refetchOnReconnect: true,
}

export const defaultMutationOptions: DefaultOptions['mutations'] = {
  retry: false,
}
