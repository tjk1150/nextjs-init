'use client'

import { formatDate } from '@/shared/utils'
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui'

import { RETURN_REQUEST_STATUS_LABELS } from '../../constants'
import type { ReturnRequest } from '../../types'

interface ReturnRequestListProps {
  items: ReturnRequest[]
  onItemClick?: (item: ReturnRequest) => void
}

export function ReturnRequestList({ items, onItemClick }: ReturnRequestListProps) {
  if (items.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          반품 요청 내역이 없습니다.
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>반품 요청 목록</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0 cursor-pointer hover:bg-muted/50 p-2 rounded"
              onClick={() => onItemClick?.(item)}
            >
              <div>
                <p className="font-medium">주문번호: {item.orderId}</p>
                <p className="text-sm text-muted-foreground">
                  {item.reason} / 수량: {item.quantity}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(item.requestedAt)}
                </p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    item.status === 'completed'
                      ? 'bg-green-100 text-green-800'
                      : item.status === 'cancelled'
                        ? 'bg-red-100 text-red-800'
                        : item.status === 'processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {RETURN_REQUEST_STATUS_LABELS[item.status]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
