import { describe, it, expect } from 'vitest'
import { validateEmail, validatePassword, validatePhone } from '../validation'

describe('validation utilities', () => {
  describe('validateEmail', () => {
    it('should return true for valid emails', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.kr')).toBe(true)
    })

    it('should return false for invalid emails', () => {
      expect(validateEmail('invalid')).toBe(false)
      expect(validateEmail('missing@')).toBe(false)
      expect(validateEmail('@nodomain.com')).toBe(false)
    })
  })

  describe('validatePassword', () => {
    it('should return true for valid passwords', () => {
      expect(validatePassword('password123')).toBe(true)
      expect(validatePassword('MySecure1')).toBe(true)
    })

    it('should return false for passwords without letters', () => {
      expect(validatePassword('12345678')).toBe(false)
    })

    it('should return false for passwords without numbers', () => {
      expect(validatePassword('password')).toBe(false)
    })

    it('should return false for short passwords', () => {
      expect(validatePassword('pass1')).toBe(false)
    })
  })

  describe('validatePhone', () => {
    it('should return true for valid Korean phone numbers', () => {
      expect(validatePhone('010-1234-5678')).toBe(true)
      expect(validatePhone('01012345678')).toBe(true)
    })

    it('should return false for invalid phone numbers', () => {
      expect(validatePhone('123-456-7890')).toBe(false)
      expect(validatePhone('invalid')).toBe(false)
    })
  })
})
