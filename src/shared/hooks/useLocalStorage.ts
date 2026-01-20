'use client'

import { useCallback, useSyncExternalStore } from 'react'

function getServerSnapshot<T>(initialValue: T): T {
  return initialValue
}

function createLocalStorageStore<T>(key: string, initialValue: T) {
  function getSnapshot(): T {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  }

  function subscribe(callback: () => void): () => void {
    function handleStorageChange(event: StorageEvent) {
      if (event.key === key) {
        callback()
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }

  return { getSnapshot, subscribe }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const store = createLocalStorageStore(key, initialValue)

  const storedValue = useSyncExternalStore(store.subscribe, store.getSnapshot, () =>
    getServerSnapshot(initialValue)
  )

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      if (typeof window === 'undefined') return

      try {
        const currentValue = store.getSnapshot()
        const valueToStore = value instanceof Function ? value(currentValue) : value
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
        window.dispatchEvent(new StorageEvent('storage', { key }))
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error)
      }
    },
    [key, store]
  )

  const removeValue = useCallback(() => {
    if (typeof window === 'undefined') return

    try {
      window.localStorage.removeItem(key)
      window.dispatchEvent(new StorageEvent('storage', { key }))
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }, [key])

  return [storedValue, setValue, removeValue]
}
