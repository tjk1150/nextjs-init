import type { BaseEntity, Status } from '@/shared/types'

export interface Settlement extends BaseEntity {
  periodStart: string
  periodEnd: string
  totalAmount: number
  fee: number
  netAmount: number
  status: SettlementStatus
  settledAt: string | null
}

export type SettlementStatus = Extract<Status, 'pending' | 'processing' | 'completed'>

export interface SettlementFilters {
  status?: SettlementStatus
  startDate?: string
  endDate?: string
}
