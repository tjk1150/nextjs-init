# Architecture Codemap

> Last updated: 2025-01-20T22:10:00Z

## Overview

Domain Driven Frontend (DDF) architecture with Next.js 16 App Router.

## Layer Structure

```
+-----------------------------------------------------+
|                    App Layer                         |
|  src/app/  (Next.js App Router, Providers)          |
+-----------------------------------------------------+
|                  Domain Layer                        |
|  src/domains/  (Business Logic, Features)           |
|  +-- return/   +-- trade/   +-- payment/            |
|  +-- user/     +-- settlement/                      |
+-----------------------------------------------------+
|                  Shared Layer                        |
|  src/shared/  (Cross-cutting Concerns)              |
|  +-- api/  +-- query/  +-- store/  +-- socket/     |
|  +-- ui/   +-- hooks/  +-- utils/  +-- types/      |
+-----------------------------------------------------+
```

## Dependency Flow

```
app/ -------> domains/ -------> shared/
  |              |                |
  |              |                v
  |              |          (No dependencies)
  |              |
  +--------------+---> Cross-domain import BLOCKED
```

## Key Patterns

| Pattern        | Location                        | Purpose           |
| -------------- | ------------------------------- | ----------------- |
| Route Groups   | `app/(auth)`, `app/(dashboard)` | Layout isolation  |
| Query Keys     | `domains/*/api/queryKeys.ts`    | Cache management  |
| Zustand Stores | `shared/store/`                 | Client state      |
| UI Components  | `shared/ui/`                    | shadcn/ui based   |
| Typed Routes   | `next.config.js`                | Route type safety |

## Tech Stack

| Category       | Technology                       | Version        |
| -------------- | -------------------------------- | -------------- |
| Framework      | Next.js (App Router + Turbopack) | 16.1.4         |
| UI Library     | React                            | 19.2.3         |
| State (Server) | TanStack Query                   | 5.90.19        |
| State (Client) | Zustand                          | 5.0.10         |
| Validation     | Zod                              | 3.25.0         |
| Styling        | Tailwind CSS                     | 3.4.17         |
| Linting        | ESLint (Flat Config)             | 9.20.0         |
| Testing        | Vitest + Playwright              | 3.1.3 / 1.52.0 |

## File Count by Layer

| Layer      | Files  | Lines (approx) |
| ---------- | ------ | -------------- |
| app/       | 12     | ~350           |
| domains/   | 31     | ~750           |
| shared/    | 38     | ~950           |
| **tests**/ | 4      | ~180           |
| **Total**  | **85** | **~2230**      |
