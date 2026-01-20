export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  meta?: PaginationMeta
}

export interface PaginationMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface ListResponse<T> {
  items: T[]
  meta: PaginationMeta
}

export type AsyncState<T> = {
  data: T | null
  isLoading: boolean
  error: string | null
}
