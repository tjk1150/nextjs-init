export const SOCKET_EVENTS = {
  // Connection
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  CONNECT_ERROR: 'connect_error',

  // Notifications
  NOTIFICATION: 'notification',
  NOTIFICATION_READ: 'notification:read',
  NOTIFICATION_CLEAR: 'notification:clear',

  // Global state sync
  STATE_SYNC: 'state:sync',
  STATE_UPDATE: 'state:update',

  // User presence
  USER_ONLINE: 'user:online',
  USER_OFFLINE: 'user:offline',
} as const

export type SocketEvent = (typeof SOCKET_EVENTS)[keyof typeof SOCKET_EVENTS]

export interface NotificationPayload {
  id: string
  type: 'info' | 'success' | 'warning' | 'error'
  title: string
  message: string
  createdAt: string
  read: boolean
}

export interface StateSyncPayload {
  entity: string
  action: 'create' | 'update' | 'delete'
  data: unknown
}
