import type { BaseEntity, Status } from '@/shared/types'

export interface TradeOrder extends BaseEntity {
  orderNumber: string
  productName: string
  quantity: number
  totalAmount: number
  status: TradeOrderStatus
  orderedAt: string
}

export type TradeOrderStatus = Extract<Status, 'pending' | 'processing' | 'completed' | 'cancelled'>

export interface TradeOrderFilters {
  status?: TradeOrderStatus
  startDate?: string
  endDate?: string
}
