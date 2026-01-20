export type ID = string

export interface BaseEntity {
  id: ID
  createdAt: string
  updatedAt: string
}

export interface AuditableEntity extends BaseEntity {
  createdBy: ID
  updatedBy: ID
}

export type Status = 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled'

export interface SelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
}

export type Nullable<T> = T | null

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type RequiredFields<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
