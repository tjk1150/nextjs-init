import { z } from 'zod'

export const emailSchema = z.string().email('유효한 이메일 주소를 입력하세요')

export const passwordSchema = z
  .string()
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다')
  .regex(/[a-zA-Z]/, '영문자를 포함해야 합니다')
  .regex(/[0-9]/, '숫자를 포함해야 합니다')

export const phoneSchema = z
  .string()
  .regex(/^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/, '유효한 휴대폰 번호를 입력하세요')

export const requiredString = z.string().min(1, '필수 입력 항목입니다')

export const positiveNumber = z.number().positive('0보다 큰 값을 입력하세요')

export const nonNegativeNumber = z.number().nonnegative('0 이상의 값을 입력하세요')

export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success
}

export function validatePassword(password: string): boolean {
  return passwordSchema.safeParse(password).success
}

export function validatePhone(phone: string): boolean {
  return phoneSchema.safeParse(phone).success
}
