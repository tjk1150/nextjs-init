export const APP_CONFIG = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'Joeun',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api',
  wsUrl: process.env.NEXT_PUBLIC_WS_URL ?? 'ws://localhost:8000',
} as const

export const ROUTES = {
  // Auth
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Dashboard
  HOME: '/',
  DASHBOARD: '/dashboard',

  // Return domain
  RETURN_REQUEST: '/return/request',
  RETURN_CONFIRMATION: '/return/confirmation',
  RETURN_LIST: '/return/list',

  // Trade domain
  TRADE_ORDER: '/trade/order',
  TRADE_LIST: '/trade/list',
  TRADE_DETAIL: '/trade/[id]',

  // Payment domain
  PAYMENT_LIST: '/payment/list',
  PAYMENT_DETAIL: '/payment/[id]',

  // User domain
  USER_PROFILE: '/user/profile',
  USER_SETTINGS: '/user/settings',

  // Settlement domain
  SETTLEMENT_LIST: '/settlement/list',
  SETTLEMENT_DETAIL: '/settlement/[id]',
} as const

export const ERROR_CODES = {
  // Auth errors
  INVALID_CREDENTIALS: 'AUTH_001',
  TOKEN_EXPIRED: 'AUTH_002',
  UNAUTHORIZED: 'AUTH_003',

  // Validation errors
  INVALID_INPUT: 'VAL_001',
  MISSING_FIELD: 'VAL_002',

  // Business errors
  INSUFFICIENT_STOCK: 'BIZ_001',
  ORDER_NOT_FOUND: 'BIZ_002',
  PAYMENT_FAILED: 'BIZ_003',

  // System errors
  INTERNAL_ERROR: 'SYS_001',
  SERVICE_UNAVAILABLE: 'SYS_002',
} as const
