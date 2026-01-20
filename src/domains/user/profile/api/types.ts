import type { BaseEntity } from '@/shared/types'

export interface UserProfile extends BaseEntity {
  email: string
  name: string
  phone: string | null
  role: UserRole
  avatar: string | null
}

export type UserRole = 'admin' | 'user' | 'manager'

export interface UpdateProfileDto {
  name?: string
  phone?: string
  avatar?: string
}
