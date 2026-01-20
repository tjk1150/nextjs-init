# Next.js Enterprise Boilerplate

Production-ready Next.js 14 boilerplate with Domain Driven Frontend architecture.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (Strict Mode) |
| Styling | Tailwind CSS + shadcn/ui |
| State | TanStack Query + Zustand |
| API | Axios + WebSocket |
| Testing | Vitest + Playwright + MSW |
| Linting | ESLint + Prettier + Boundaries |
| Git | Husky + Commitlint |

## Quick Start

```bash
# Clone
git clone https://github.com/tjk1150/nextjs-init.git my-app
cd my-app

# Install
npm install

# Development
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Auth routes (login, register)
│   ├── (dashboard)/        # Protected routes
│   ├── layout.tsx          # Root layout
│   └── providers.tsx       # Global providers
│
├── domains/                # Business domains (DDF)
│   ├── return/             # Return management
│   │   └── request/        # Feature module
│   │       ├── api/        # queryKeys, queries, mutations
│   │       ├── hooks/      # Domain-specific hooks
│   │       ├── ui/         # Components (form/, layout/)
│   │       ├── constants.ts
│   │       ├── types.ts
│   │       └── index.ts
│   ├── trade/
│   ├── payment/
│   ├── user/
│   └── settlement/
│
├── shared/                 # Shared utilities
│   ├── api/                # Axios client, interceptors
│   ├── query/              # TanStack Query config
│   ├── store/              # Zustand stores
│   ├── socket/             # WebSocket client
│   ├── ui/                 # shadcn/ui components
│   ├── hooks/              # Common hooks
│   ├── utils/              # Utilities
│   ├── constants/          # App constants
│   └── types/              # Global types
│
└── __tests__/              # Test utilities
    ├── mocks/              # MSW handlers
    └── utils/              # Test helpers
```

## Architecture: Domain Driven Frontend

### Why DDF?

| Traditional | Domain Driven |
|-------------|---------------|
| `components/ReturnForm.tsx` | `domains/return/request/ui/form/` |
| `hooks/useReturn.ts` | `domains/return/request/hooks/` |
| `api/return.ts` | `domains/return/request/api/` |

**One feature = One folder**. No more searching across multiple directories.

### Domain Boundaries

ESLint automatically prevents cross-domain imports:

```typescript
// Allowed
import { Button } from '@/shared/ui'
import { useReturnRequestForm } from './hooks'

// Blocked by ESLint
import { something } from '@/domains/trade'  // Error!
```

## Scripts

```bash
# Development
npm run dev           # Start dev server
npm run build         # Production build
npm run start         # Start production server

# Testing
npm test              # Run unit tests
npm run test:ui       # Test with UI
npm run test:coverage # Coverage report
npm run test:e2e      # E2E tests (Playwright)

# Code Quality
npm run lint          # ESLint
npm run lint:fix      # Fix lint errors
npm run type-check    # TypeScript check
```

## Adding a New Domain

1. Create domain structure:
```bash
mkdir -p src/domains/[domain]/[feature]/{api,hooks,ui/{form,layout}}
```

2. Copy template from `return/request`:
```
api/
├── queryKeys.ts    # Query key factory
├── queries.ts      # useQuery hooks
├── mutations.ts    # useMutation hooks
├── types.ts        # API types
└── index.ts        # Exports
```

3. Add ESLint boundary rule in `.eslintrc.json`

4. Create page in `app/(dashboard)/[domain]/[feature]/page.tsx`

## Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add table
```

Components are added to `src/shared/ui/`

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_WS_URL=ws://localhost:8000
NEXT_PUBLIC_APP_NAME=MyApp
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: add user authentication
fix: resolve login redirect issue
refactor: simplify query client setup
docs: update README
test: add unit tests for format utils
chore: update dependencies
```

## License

MIT
