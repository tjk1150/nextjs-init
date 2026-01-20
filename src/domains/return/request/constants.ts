import type { SelectOption } from '@/shared/types'
import type { ReturnRequestStatus } from './types'

export const RETURN_REQUEST_STATUS_OPTIONS: SelectOption<ReturnRequestStatus>[] = [
  { label: '대기중', value: 'pending' },
  { label: '처리중', value: 'processing' },
  { label: '완료', value: 'completed' },
  { label: '취소됨', value: 'cancelled' },
]

export const RETURN_REQUEST_STATUS_LABELS: Record<ReturnRequestStatus, string> = {
  pending: '대기중',
  processing: '처리중',
  completed: '완료',
  cancelled: '취소됨',
}

export const RETURN_REASONS = [
  { label: '단순 변심', value: 'change_of_mind' },
  { label: '상품 불량', value: 'defective' },
  { label: '오배송', value: 'wrong_delivery' },
  { label: '상품 파손', value: 'damaged' },
  { label: '기타', value: 'other' },
] as const
