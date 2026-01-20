# Frontend Codemap

> Last updated: 2025-01-20T22:10:00Z

## App Router Structure

```
src/app/
+-- layout.tsx          # Root layout + Providers
+-- page.tsx            # Landing page
+-- providers.tsx       # QueryClient, Theme
+-- globals.css         # Tailwind + CSS variables
|
+-- (auth)/             # Auth route group
|   +-- layout.tsx      # Auth-specific layout
|   +-- login/
|       +-- page.tsx    # Login page
|
+-- (dashboard)/        # Protected route group
    +-- layout.tsx      # Sidebar + Header
    +-- dashboard/
    +-- return/request/
    +-- trade/list/
    +-- payment/list/
    +-- settlement/list/
    +-- user/profile/
```

## Domain UI Structure

```
domains/[domain]/[feature]/
+-- ui/
|   +-- form/           # Input components
|   +-- layout/         # List, Grid, Table
|   +-- select/         # Dropdowns (if needed)
|   +-- description/    # Info displays (if needed)
+-- modal/              # Domain modals (if needed)
+-- Page.tsx            # Feature entry point
```

## Shared UI Components

| Component | Path                | Props                    |
| --------- | ------------------- | ------------------------ |
| Button    | `shared/ui/Button/` | variant, size, isLoading |
| Input     | `shared/ui/Input/`  | error                    |
| Label     | `shared/ui/Label/`  | -                        |
| Card      | `shared/ui/Card/`   | Header, Content, Footer  |

## State Management

```
+-------------------+     +-------------------+
|  Server State     |     |  Client State     |
|  TanStack Query   |     |     Zustand       |
+-------------------+     +-------------------+
| - API responses   |     | - Auth (user)     |
| - Cached data     |     | - UI (sidebar)    |
| - Loading state   |     | - Theme           |
+-------------------+     +-------------------+
```

## Hooks

| Hook            | Path             | Purpose              | Pattern              |
| --------------- | ---------------- | -------------------- | -------------------- |
| useDebounce     | `shared/hooks/`  | Debounce values      | useState + useEffect |
| useLocalStorage | `shared/hooks/`  | Persistent state     | useSyncExternalStore |
| useMediaQuery   | `shared/hooks/`  | Responsive design    | useSyncExternalStore |
| useSocket       | `shared/socket/` | WebSocket connection | Custom store         |

## Navigation

Using Next.js 16 typed routes for type-safe navigation:

```typescript
import type { Route } from 'next'

// Type-safe route navigation
router.push('/return/list' as Route)
```
