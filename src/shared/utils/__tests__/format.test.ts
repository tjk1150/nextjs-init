import { describe, it, expect } from 'vitest'
import {
  formatCurrency,
  formatNumber,
  formatPercent,
  formatPhoneNumber,
} from '../format'

describe('format utilities', () => {
  describe('formatCurrency', () => {
    it('should format KRW currency', () => {
      expect(formatCurrency(10000)).toBe('₩10,000')
      expect(formatCurrency(1234567)).toBe('₩1,234,567')
    })

    it('should handle zero', () => {
      expect(formatCurrency(0)).toBe('₩0')
    })
  })

  describe('formatNumber', () => {
    it('should format numbers with comma separators', () => {
      expect(formatNumber(1000)).toBe('1,000')
      expect(formatNumber(1234567)).toBe('1,234,567')
    })

    it('should handle small numbers', () => {
      expect(formatNumber(0)).toBe('0')
      expect(formatNumber(999)).toBe('999')
    })
  })

  describe('formatPercent', () => {
    it('should format percentage with default decimals', () => {
      expect(formatPercent(0.1234)).toBe('12.3%')
      expect(formatPercent(0.5)).toBe('50.0%')
    })

    it('should respect custom decimals', () => {
      expect(formatPercent(0.1234, 2)).toBe('12.34%')
      expect(formatPercent(0.1, 0)).toBe('10%')
    })
  })

  describe('formatPhoneNumber', () => {
    it('should format 11-digit phone numbers', () => {
      expect(formatPhoneNumber('01012345678')).toBe('010-1234-5678')
    })

    it('should format 10-digit phone numbers', () => {
      expect(formatPhoneNumber('0101234567')).toBe('010-123-4567')
    })

    it('should return original if format is unknown', () => {
      expect(formatPhoneNumber('123')).toBe('123')
    })
  })
})
