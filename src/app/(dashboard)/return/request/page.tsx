'use client'

import { useRouter } from 'next/navigation'

import { ReturnRequestForm, useCreateReturnRequest } from '@/domains/return/request'

export default function ReturnRequestPage() {
  const router = useRouter()
  const createMutation = useCreateReturnRequest()

  function handleSubmit(data: { orderId: string; reason: string; quantity: number; notes?: string }) {
    createMutation.mutate(data, {
      onSuccess: () => {
        router.push('/return/list')
      },
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <ReturnRequestForm onSubmit={handleSubmit} isLoading={createMutation.isPending} />
    </div>
  )
}
