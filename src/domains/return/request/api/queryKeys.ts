export const returnRequestKeys = {
  all: ['return', 'request'] as const,
  lists: () => [...returnRequestKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...returnRequestKeys.lists(), filters] as const,
  details: () => [...returnRequestKeys.all, 'detail'] as const,
  detail: (id: string) => [...returnRequestKeys.details(), id] as const,
}
