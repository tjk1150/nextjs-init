import type { BaseEntity, Status } from '@/shared/types'

export interface ReturnRequest extends BaseEntity {
  orderId: string
  reason: string
  quantity: number
  status: ReturnRequestStatus
  requestedAt: string
  processedAt: string | null
  notes: string | null
}

export type ReturnRequestStatus = Extract<Status, 'pending' | 'processing' | 'completed' | 'cancelled'>

export interface CreateReturnRequestDto {
  orderId: string
  reason: string
  quantity: number
  notes?: string
}

export interface UpdateReturnRequestDto {
  status?: ReturnRequestStatus
  notes?: string
}

export interface ReturnRequestFilters {
  status?: ReturnRequestStatus
  startDate?: string
  endDate?: string
  orderId?: string
}
