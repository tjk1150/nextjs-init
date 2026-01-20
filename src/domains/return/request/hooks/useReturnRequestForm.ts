'use client'

import { useState, useCallback } from 'react'
import { z } from 'zod'

import type { CreateReturnRequestDto } from '../api/types'

const returnRequestSchema = z.object({
  orderId: z.string().min(1, '주문번호를 입력하세요'),
  reason: z.string().min(1, '반품 사유를 선택하세요'),
  quantity: z.number().min(1, '수량은 1개 이상이어야 합니다'),
  notes: z.string().optional(),
})

type ReturnRequestFormData = z.infer<typeof returnRequestSchema>

interface FormErrors {
  orderId?: string
  reason?: string
  quantity?: string
  notes?: string
}

export function useReturnRequestForm(initialData?: Partial<CreateReturnRequestDto>) {
  const [formData, setFormData] = useState<ReturnRequestFormData>({
    orderId: initialData?.orderId ?? '',
    reason: initialData?.reason ?? '',
    quantity: initialData?.quantity ?? 1,
    notes: initialData?.notes ?? '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const updateField = useCallback(<K extends keyof ReturnRequestFormData>(
    field: K,
    value: ReturnRequestFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }, [])

  const validate = useCallback((): boolean => {
    const result = returnRequestSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: FormErrors = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors
        fieldErrors[field] = err.message
      })
      setErrors(fieldErrors)
      return false
    }

    setErrors({})
    return true
  }, [formData])

  const reset = useCallback(() => {
    setFormData({
      orderId: '',
      reason: '',
      quantity: 1,
      notes: '',
    })
    setErrors({})
  }, [])

  return {
    formData,
    errors,
    updateField,
    validate,
    reset,
  }
}
