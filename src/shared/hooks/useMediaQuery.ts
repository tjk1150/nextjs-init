'use client'

import { useSyncExternalStore } from 'react'

function getServerSnapshot(): boolean {
  return false
}

function createMediaQueryStore(query: string) {
  function getSnapshot(): boolean {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  }

  function subscribe(callback: () => void): () => void {
    if (typeof window === 'undefined') return () => {}

    const media = window.matchMedia(query)
    media.addEventListener('change', callback)
    return () => media.removeEventListener('change', callback)
  }

  return { getSnapshot, subscribe }
}

export function useMediaQuery(query: string): boolean {
  const store = createMediaQueryStore(query)

  return useSyncExternalStore(store.subscribe, store.getSnapshot, getServerSnapshot)
}

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 768px)')
}

export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
}

export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1025px)')
}
