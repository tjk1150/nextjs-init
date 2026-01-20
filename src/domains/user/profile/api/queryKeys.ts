export const userProfileKeys = {
  all: ['user', 'profile'] as const,
  current: () => [...userProfileKeys.all, 'current'] as const,
  settings: () => [...userProfileKeys.all, 'settings'] as const,
}
