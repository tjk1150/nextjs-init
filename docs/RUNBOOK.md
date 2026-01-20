# Runbook

> Last updated: 2025-01-20 | Version: 1.0.0

## Deployment

### Prerequisites

- Node.js 20+ (required for Next.js 16)
- npm 10+
- Access to deployment platform (Vercel/AWS/etc.)

### Production Build

```bash
# 1. Install dependencies
npm ci --legacy-peer-deps

# 2. Type check
npm run type-check

# 3. Lint check
npm run lint

# 4. Run tests
npm test

# 5. Build
npm run build

# 6. Start (if self-hosted)
npm start
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables (Production)

| Variable                      | Required | Notes                        |
| ----------------------------- | -------- | ---------------------------- |
| `NEXT_PUBLIC_API_URL`         | Yes      | Production API URL           |
| `NEXT_PUBLIC_WS_URL`          | Yes      | Production WebSocket URL     |
| `NEXT_PUBLIC_APP_NAME`        | Yes      | App name                     |
| `NEXT_PUBLIC_APP_URL`         | Yes      | Production frontend URL      |
| `NEXT_PUBLIC_ENABLE_MOCK_API` | No       | Set to `false` in production |

## Monitoring

### Health Checks

| Endpoint      | Expected | Action if Failed      |
| ------------- | -------- | --------------------- |
| `/`           | 200 OK   | Check deployment logs |
| `/api/health` | 200 OK   | Check API server      |

### Key Metrics

- Response time < 200ms
- Error rate < 1%
- Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1)

### Logging

- Browser: React Query Devtools (dev only)
- Server: Next.js built-in logging
- Errors: Consider Sentry integration

## Common Issues

### 1. Build Fails

**Symptoms:** `npm run build` exits with error

**Solutions:**

```bash
# Check TypeScript errors
npm run type-check

# Check ESLint errors
npm run lint

# Clear cache and rebuild
rm -rf .next node_modules
npm install --legacy-peer-deps
npm run build
```

### 2. Hydration Mismatch

**Symptoms:** Console warning about hydration

**Solutions:**

- Check for `Date.now()` or `Math.random()` in render
- Use `useEffect` for client-only code
- Add `suppressHydrationWarning` if intentional

### 3. API Connection Failed

**Symptoms:** Network errors in console

**Solutions:**

```bash
# Check environment variables
echo $NEXT_PUBLIC_API_URL

# Verify API is running
curl $NEXT_PUBLIC_API_URL/health

# Check CORS configuration on API server
```

### 4. WebSocket Disconnected

**Symptoms:** Real-time updates not working

**Solutions:**

```bash
# Check WebSocket URL
echo $NEXT_PUBLIC_WS_URL

# Verify WebSocket server is running
wscat -c $NEXT_PUBLIC_WS_URL
```

### 5. ESLint Flat Config Issues

**Symptoms:** ESLint errors about missing config

**Solutions:**

```bash
# Ensure eslint.config.mjs exists (ESLint 9 flat config)
ls eslint.config.mjs

# Run lint directly
npx eslint src/
```

### 6. React 19 Peer Dependency Warnings

**Symptoms:** npm install shows peer dependency warnings

**Solutions:**

```bash
# Use legacy peer deps flag
npm install --legacy-peer-deps

# Or add to .npmrc
echo "legacy-peer-deps=true" >> .npmrc
```

## Rollback Procedures

### Vercel

```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback [deployment-url]
```

### Manual Rollback

```bash
# 1. Checkout previous version
git checkout v1.x.x

# 2. Rebuild
npm ci --legacy-peer-deps && npm run build

# 3. Deploy
npm start
```

### Database Rollback

N/A - Frontend-only application

## Emergency Contacts

| Role      | Contact       |
| --------- | ------------- |
| Tech Lead | [Add contact] |
| DevOps    | [Add contact] |
| On-call   | [Add contact] |

## Incident Response

1. **Identify** - Check monitoring alerts
2. **Communicate** - Notify team in Slack
3. **Mitigate** - Rollback if needed
4. **Investigate** - Check logs
5. **Resolve** - Deploy fix
6. **Post-mortem** - Document learnings
