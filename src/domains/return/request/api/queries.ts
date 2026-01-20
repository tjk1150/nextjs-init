import { useQuery } from '@tanstack/react-query'

import { api } from '@/shared/api'
import type { ListResponse, PaginationParams } from '@/shared/types'

import { returnRequestKeys } from './queryKeys'
import type { ReturnRequest, ReturnRequestFilters } from './types'

interface UseReturnRequestListParams extends PaginationParams {
  filters?: ReturnRequestFilters
}

export function useReturnRequestList(params?: UseReturnRequestListParams) {
  const { filters = {}, ...pagination } = params ?? {}

  return useQuery({
    queryKey: returnRequestKeys.list({ ...filters, ...pagination }),
    queryFn: () =>
      api.get<ListResponse<ReturnRequest>>('/return/requests', {
        params: { ...filters, ...pagination },
      }),
  })
}

export function useReturnRequestDetail(id: string) {
  return useQuery({
    queryKey: returnRequestKeys.detail(id),
    queryFn: () => api.get<ReturnRequest>(`/return/requests/${id}`),
    enabled: !!id,
  })
}
