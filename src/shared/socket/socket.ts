import { io, Socket } from 'socket.io-client'

import { useAuthStore } from '@/shared/store/authStore'

const WS_URL = process.env.NEXT_PUBLIC_WS_URL ?? 'ws://localhost:8000'

let socket: Socket | null = null

export function getSocket(): Socket {
  if (!socket) {
    socket = io(WS_URL, {
      autoConnect: false,
      transports: ['websocket'],
      auth: () => ({
        token: useAuthStore.getState().accessToken,
      }),
    })
  }

  return socket
}

export function connectSocket(): void {
  const s = getSocket()

  if (!s.connected) {
    s.connect()
  }
}

export function disconnectSocket(): void {
  if (socket?.connected) {
    socket.disconnect()
  }
}

export function isSocketConnected(): boolean {
  return socket?.connected ?? false
}
