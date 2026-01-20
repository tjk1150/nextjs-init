# Data Codemap

> Last updated: 2025-01-20T17:30:00Z

## Domain Types

### Return Domain

```typescript
// domains/return/request/api/types.ts
interface ReturnRequest {
  id: string
  orderId: string
  reason: string
  quantity: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  requestedAt: string
  processedAt: string | null
  notes: string | null
  createdAt: string
  updatedAt: string
}
```

### Trade Domain

```typescript
// domains/trade/list/api/types.ts
interface TradeOrder {
  id: string
  orderNumber: string
  productName: string
  quantity: number
  totalAmount: number
  status: 'pending' | 'processing' | 'completed' | 'cancelled'
  orderedAt: string
  createdAt: string
  updatedAt: string
}
```

### Payment Domain

```typescript
// domains/payment/list/api/types.ts
interface Payment {
  id: string
  orderId: string
  amount: number
  method: 'card' | 'bank_transfer' | 'virtual_account'
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  paidAt: string | null
  createdAt: string
  updatedAt: string
}
```

### User Domain

```typescript
// domains/user/profile/api/types.ts
interface UserProfile {
  id: string
  email: string
  name: string
  phone: string | null
  role: 'admin' | 'user' | 'manager'
  avatar: string | null
  createdAt: string
  updatedAt: string
}
```

### Settlement Domain

```typescript
// domains/settlement/list/api/types.ts
interface Settlement {
  id: string
  periodStart: string
  periodEnd: string
  totalAmount: number
  fee: number
  netAmount: number
  status: 'pending' | 'processing' | 'completed'
  settledAt: string | null
  createdAt: string
  updatedAt: string
}
```

## Shared Types

```typescript
// shared/types/api.ts
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: PaginationMeta
}

interface PaginationMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

// shared/types/common.ts
interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

type Status = 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'
```

## Query Keys

| Domain     | Key Factory                                |
| ---------- | ------------------------------------------ |
| return     | `returnRequestKeys.list()`, `.detail(id)`  |
| trade      | `tradeOrderKeys.list()`, `.detail(id)`     |
| payment    | `paymentKeys.list()`, `.detail(id)`        |
| user       | `userProfileKeys.current()`, `.settings()` |
| settlement | `settlementKeys.list()`, `.detail(id)`     |
