import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

import { useAuthStore } from '@/shared/store/authStore'

export function setupInterceptors(client: AxiosInstance): void {
  client.interceptors.request.use(onRequestFulfilled, onRequestRejected)
  client.interceptors.response.use(onResponseFulfilled, onResponseRejected)
}

function onRequestFulfilled(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  const token = useAuthStore.getState().accessToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}

function onRequestRejected(error: AxiosError): Promise<AxiosError> {
  return Promise.reject(error)
}

function onResponseFulfilled(response: AxiosResponse): AxiosResponse {
  return response
}

async function onResponseRejected(error: AxiosError): Promise<AxiosError> {
  const originalRequest = error.config

  if (error.response?.status === 401 && originalRequest) {
    useAuthStore.getState().logout()

    if (typeof window !== 'undefined') {
      window.location.href = '/login'
    }
  }

  return Promise.reject(error)
}
