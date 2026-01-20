export const tradeOrderKeys = {
  all: ['trade', 'order'] as const,
  lists: () => [...tradeOrderKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...tradeOrderKeys.lists(), filters] as const,
  details: () => [...tradeOrderKeys.all, 'detail'] as const,
  detail: (id: string) => [...tradeOrderKeys.details(), id] as const,
}
