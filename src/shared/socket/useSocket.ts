'use client'

import { useEffect, useCallback, useState } from 'react'

import { getSocket, connectSocket, disconnectSocket } from './socket'
import { SOCKET_EVENTS, SocketEvent } from './events'

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const socket = getSocket()

    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    socket.on(SOCKET_EVENTS.CONNECT, onConnect)
    socket.on(SOCKET_EVENTS.DISCONNECT, onDisconnect)

    connectSocket()

    return () => {
      socket.off(SOCKET_EVENTS.CONNECT, onConnect)
      socket.off(SOCKET_EVENTS.DISCONNECT, onDisconnect)
    }
  }, [])

  const emit = useCallback(<T>(event: string, data: T) => {
    const socket = getSocket()
    socket.emit(event, data)
  }, [])

  const on = useCallback(<T>(event: SocketEvent | string, callback: (data: T) => void) => {
    const socket = getSocket()
    socket.on(event, callback)

    return () => {
      socket.off(event, callback)
    }
  }, [])

  const off = useCallback((event: SocketEvent | string) => {
    const socket = getSocket()
    socket.off(event)
  }, [])

  return {
    isConnected,
    emit,
    on,
    off,
    connect: connectSocket,
    disconnect: disconnectSocket,
  }
}
