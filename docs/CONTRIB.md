# Contributing Guide

> Last updated: 2025-01-20 | Source: package.json, .env.example

## Quick Start

```bash
# 1. Clone repository
git clone https://github.com/tjk1150/nextjs-init.git
cd nextjs-init

# 2. Install dependencies (use --legacy-peer-deps for React 19)
npm install --legacy-peer-deps

# 3. Setup environment
cp .env.example .env.local

# 4. Start development
npm run dev
```

## Available Scripts

| Script            | Command                 | Description                     |
| ----------------- | ----------------------- | ------------------------------- |
| `dev`             | `next dev --turbopack`  | Start dev server with Turbopack |
| `build`           | `next build`            | Create production build         |
| `start`           | `next start`            | Start production server         |
| `lint`            | `eslint src/`           | Run ESLint on src/              |
| `lint:fix`        | `eslint src/ --fix`     | Fix lint errors                 |
| `type-check`      | `tsc --noEmit`          | TypeScript type checking        |
| `test`            | `vitest`                | Run unit tests                  |
| `test:ui`         | `vitest --ui`           | Run tests with UI               |
| `test:coverage`   | `vitest --coverage`     | Run tests with coverage         |
| `test:e2e`        | `playwright test`       | Run E2E tests                   |
| `storybook`       | `storybook dev -p 6006` | Start Storybook                 |
| `build-storybook` | `storybook build`       | Build Storybook                 |
| `prepare`         | `husky`                 | Setup git hooks                 |

## Environment Variables

| Variable                      | Default                     | Description          |
| ----------------------------- | --------------------------- | -------------------- |
| `NEXT_PUBLIC_API_URL`         | `http://localhost:8000/api` | Backend API base URL |
| `NEXT_PUBLIC_WS_URL`          | `ws://localhost:8000`       | WebSocket server URL |
| `NEXT_PUBLIC_APP_NAME`        | `Joeun`                     | Application name     |
| `NEXT_PUBLIC_APP_URL`         | `http://localhost:3000`     | Frontend URL         |
| `NEXT_PUBLIC_ENABLE_MOCK_API` | `true`                      | Enable MSW mock API  |

## Tech Stack

| Category       | Package        | Version |
| -------------- | -------------- | ------- |
| Framework      | Next.js        | 16.1.4  |
| UI Library     | React          | 19.2.3  |
| State (Server) | TanStack Query | 5.90.19 |
| State (Client) | Zustand        | 5.0.10  |
| Validation     | Zod            | 3.25.0  |
| Styling        | Tailwind CSS   | 3.4.17  |
| Linting        | ESLint         | 9.20.0  |
| Testing        | Vitest         | 3.1.3   |
| E2E Testing    | Playwright     | 1.52.0  |
| TypeScript     | TypeScript     | 5.8.3   |

## Development Workflow

### 1. Create Feature Branch

```bash
git checkout -b feat/feature-name
```

### 2. Domain-First Development

```bash
# Create new domain feature
mkdir -p src/domains/[domain]/[feature]/{api,hooks,ui/{form,layout}}
```

### 3. TDD Workflow

```bash
# Write tests first
npm test -- --watch

# Implement to pass tests
# Check coverage (minimum 80%)
npm run test:coverage
```

### 4. Pre-commit Checks

Automatic via Husky:

- ESLint + Prettier on staged files
- Commitlint for commit messages

### 5. Commit Convention

```bash
# Format: <type>: <description>
git commit -m "feat: add user authentication"
git commit -m "fix: resolve login redirect"
git commit -m "refactor: simplify query client"
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

## Testing Procedures

### Unit Tests

```bash
npm test                    # Run all tests
npm test -- --watch         # Watch mode
npm run test:coverage       # With coverage report
```

### E2E Tests

```bash
npm run test:e2e            # Run Playwright tests
npx playwright show-report  # View test report
```

### Manual Testing

1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Test critical user flows

## Code Quality Checklist

- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Tests pass (`npm test`)
- [ ] Coverage >= 80% for new code
- [ ] No `console.log` statements
- [ ] No hardcoded secrets
- [ ] Immutable patterns used
