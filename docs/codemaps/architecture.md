# Architecture Codemap

> Last updated: 2025-01-20T17:30:00Z

## Overview

Domain Driven Frontend (DDF) architecture with Next.js 14 App Router.

## Layer Structure

```
┌─────────────────────────────────────────────────┐
│                    App Layer                     │
│  src/app/  (Next.js App Router, Providers)      │
├─────────────────────────────────────────────────┤
│                  Domain Layer                    │
│  src/domains/  (Business Logic, Features)       │
│  ├── return/   ├── trade/   ├── payment/        │
│  ├── user/     └── settlement/                  │
├─────────────────────────────────────────────────┤
│                  Shared Layer                    │
│  src/shared/  (Cross-cutting Concerns)          │
│  ├── api/  ├── query/  ├── store/  ├── socket/ │
│  ├── ui/   ├── hooks/  ├── utils/  ├── types/  │
└─────────────────────────────────────────────────┘
```

## Dependency Flow

```
app/ ──────► domains/ ──────► shared/
  │              │                │
  │              │                ▼
  │              │          (No dependencies)
  │              │
  └──────────────┴─► Cross-domain import BLOCKED
```

## Key Patterns

| Pattern        | Location                        | Purpose          |
| -------------- | ------------------------------- | ---------------- |
| Route Groups   | `app/(auth)`, `app/(dashboard)` | Layout isolation |
| Query Keys     | `domains/*/api/queryKeys.ts`    | Cache management |
| Zustand Stores | `shared/store/`                 | Client state     |
| UI Components  | `shared/ui/`                    | shadcn/ui based  |

## File Count by Layer

| Layer      | Files  | Lines (approx) |
| ---------- | ------ | -------------- |
| app/       | 12     | ~400           |
| domains/   | 31     | ~900           |
| shared/    | 30     | ~1200          |
| **tests**/ | 6      | ~200           |
| **Total**  | **79** | **~2700**      |
