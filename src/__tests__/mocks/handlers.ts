import { http, HttpResponse } from 'msw'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api'

export const handlers = [
  // Return requests
  http.get(`${API_URL}/return/requests`, () => {
    return HttpResponse.json({
      items: [
        {
          id: '1',
          orderId: 'ORD-001',
          reason: 'defective',
          quantity: 1,
          status: 'pending',
          requestedAt: '2024-01-15T10:00:00Z',
          processedAt: null,
          notes: null,
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-15T10:00:00Z',
        },
      ],
      meta: {
        total: 1,
        page: 1,
        limit: 10,
        totalPages: 1,
      },
    })
  }),

  http.post(`${API_URL}/return/requests`, async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>
    return HttpResponse.json({
      id: '2',
      ...(body ?? {}),
      status: 'pending',
      requestedAt: new Date().toISOString(),
      processedAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    })
  }),

  // Auth
  http.post(`${API_URL}/auth/login`, async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string }
    return HttpResponse.json({
      user: {
        id: '1',
        email: body.email,
        name: 'Test User',
        role: 'user',
      },
      token: 'mock-token-123',
    })
  }),
]
