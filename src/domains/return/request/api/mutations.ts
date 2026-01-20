import { useMutation, useQueryClient } from '@tanstack/react-query'

import { api } from '@/shared/api'

import { returnRequestKeys } from './queryKeys'
import type { ReturnRequest, CreateReturnRequestDto, UpdateReturnRequestDto } from './types'

export function useCreateReturnRequest() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateReturnRequestDto) =>
      api.post<ReturnRequest>('/return/requests', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: returnRequestKeys.lists() })
    },
  })
}

export function useUpdateReturnRequest(id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateReturnRequestDto) =>
      api.patch<ReturnRequest>(`/return/requests/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: returnRequestKeys.lists() })
      queryClient.invalidateQueries({ queryKey: returnRequestKeys.detail(id) })
    },
  })
}

export function useCancelReturnRequest(id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => api.post<ReturnRequest>(`/return/requests/${id}/cancel`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: returnRequestKeys.lists() })
      queryClient.invalidateQueries({ queryKey: returnRequestKeys.detail(id) })
    },
  })
}
