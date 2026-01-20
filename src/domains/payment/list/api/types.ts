import type { BaseEntity, Status } from '@/shared/types'

export interface Payment extends BaseEntity {
  orderId: string
  amount: number
  method: PaymentMethod
  status: PaymentStatus
  paidAt: string | null
}

export type PaymentStatus = Extract<Status, 'pending' | 'completed' | 'failed' | 'cancelled'>

export type PaymentMethod = 'card' | 'bank_transfer' | 'virtual_account'

export interface PaymentFilters {
  status?: PaymentStatus
  method?: PaymentMethod
  startDate?: string
  endDate?: string
}
