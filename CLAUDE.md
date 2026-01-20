# Joeun Project CLAUDE.md

대형 프론트엔드 프로젝트 - Domain Driven Frontend 아키텍처

## Project Overview

- **Type**: Large-scale Frontend Application
- **Scale**: API 300+, Multiple Domains, Real-time Socket
- **Architecture**: Domain Driven Frontend (DDF)
- **Stack**: React, TypeScript, TanStack Query, WebSocket

---

## Critical Rules

### 1. Domain-First Organization

```
domains/
  [domain]/
    [feature]/
      ui/
      api/
      hooks/
      modal/
      types.ts
      constants.ts
      Page.tsx
```

**Do's:**
- Organize by business domain, NOT by page or technology
- Keep all related code within one domain folder
- One feature = one folder that contains everything

**Don'ts:**
- Create cross-domain dependencies
- Share components between domains prematurely
- Use Atomic Design (atom/molecule distinction is ambiguous)

### 2. Code Style

- No emojis in code, comments, or documentation
- Immutability always - never mutate objects or arrays
- 200-400 lines per file, 800 max
- Role-based UI separation (form/, select/, layout/, description/)

### 3. TanStack Query Rules

```
api/
  queryKeys.ts   # Domain-specific query keys
  queries.ts     # useQuery hooks
  mutations.ts   # useMutation hooks
  types.ts       # API types
```

**Naming**: `[domain][action]` (e.g., returnRequest.list, tradeOrder.detail)

**Do's:**
- Keep queryKeys inside domain folder
- Follow naming convention strictly

**Don'ts:**
- Create global queryKeys
- Share query hooks across domains

### 4. Socket Structure

- **Global socket** (`shared/socket/`): Notifications, state sync
- **Domain socket** (`domains/[domain]/socket/`): Real-time business logic

**Decision criteria**: Does this event matter to other domains?

### 5. Testing

- TDD: Write tests first
- 80% minimum coverage
- Unit tests for utilities
- Integration tests for API hooks
- E2E tests for critical user flows

### 6. Security

- No hardcoded secrets
- Environment variables for sensitive data
- Validate all user inputs
- CSRF protection enabled

---

## File Structure

```
src/
|-- app/              # App entry, global settings
|   |-- App.tsx
|   |-- routes.tsx
|   |-- providers/
|
|-- domains/          # Business domains (CORE)
|   |-- return/
|   |-- trade/
|   |-- payment/
|   |-- user/
|   |-- settlement/
|
|-- shared/           # Global utilities (domain-agnostic)
|   |-- api/
|   |-- query/
|   |-- socket/
|   |-- ui/
|   |-- hooks/
|   |-- utils/
|   |-- constants/
|   |-- types/
|
|-- assets/
|-- styles/
|-- tests/
```

---

## When to Split Folders

- Files exceed 7-10 count
- Multiple files always opened together for edits
- New team members can't understand structure

**Only split when these conditions are met.**

---

## Available Commands

- `/tdd` - Test-driven development workflow
- `/plan` - Create implementation plan
- `/code-review` - Review code quality
- `/build-fix` - Fix build errors
- `/e2e` - E2E test generation

---

## Git Workflow

- Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`
- Never commit to main directly
- PRs require review
- All tests must pass before merge

---

## Architecture Goal

> The goal is NOT "writing good code"
> but "preventing human mistakes"
