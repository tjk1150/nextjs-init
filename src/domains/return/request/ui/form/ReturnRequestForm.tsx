'use client'

import { Button, Input, Label } from '@/shared/ui'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/shared/ui'

import { RETURN_REASONS } from '../../constants'
import { useReturnRequestForm } from '../../hooks'

interface ReturnRequestFormProps {
  onSubmit: (data: { orderId: string; reason: string; quantity: number; notes?: string }) => void
  isLoading?: boolean
}

export function ReturnRequestForm({ onSubmit, isLoading }: ReturnRequestFormProps) {
  const { formData, errors, updateField, validate } = useReturnRequestForm()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (validate()) {
      onSubmit(formData)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>반품 요청</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="orderId">주문번호</Label>
            <Input
              id="orderId"
              value={formData.orderId}
              onChange={(e) => updateField('orderId', e.target.value)}
              error={errors.orderId}
              placeholder="주문번호를 입력하세요"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">반품 사유</Label>
            <select
              id="reason"
              value={formData.reason}
              onChange={(e) => updateField('reason', e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">선택하세요</option>
              {RETURN_REASONS.map((reason) => (
                <option key={reason.value} value={reason.value}>
                  {reason.label}
                </option>
              ))}
            </select>
            {errors.reason && <p className="text-sm text-destructive">{errors.reason}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">수량</Label>
            <Input
              id="quantity"
              type="number"
              min={1}
              value={formData.quantity}
              onChange={(e) => updateField('quantity', parseInt(e.target.value, 10) || 1)}
              error={errors.quantity}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">비고</Label>
            <Input
              id="notes"
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              placeholder="추가 메모 (선택사항)"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" isLoading={isLoading}>
            반품 요청하기
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
