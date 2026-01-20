'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Route } from 'next'

import { cn } from '@/shared/utils'
import { Button } from '@/shared/ui'
import { useAuthStore, useUIStore } from '@/shared/store'

interface DashboardLayoutProps {
  children: ReactNode
}

const navigation: Array<{ name: string; href: Route }> = [
  { name: 'Dashboard', href: '/dashboard' as Route },
  { name: 'Return', href: '/return/request' as Route },
  { name: 'Trade', href: '/trade/list' as Route },
  { name: 'Payment', href: '/payment/list' as Route },
  { name: 'Settlement', href: '/settlement/list' as Route },
  { name: 'Profile', href: '/user/profile' as Route },
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)
  const sidebarCollapsed = useUIStore((state) => state.sidebarCollapsed)
  const setSidebarCollapsed = useUIStore((state) => state.setSidebarCollapsed)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          'flex flex-col border-r bg-card transition-all duration-300',
          sidebarCollapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          {!sidebarCollapsed && <span className="text-lg font-semibold">Joeun</span>}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            {sidebarCollapsed ? '>' : '<'}
          </Button>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname.startsWith(item.href)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              {!sidebarCollapsed && item.name}
            </Link>
          ))}
        </nav>

        <div className="border-t p-4">
          {!sidebarCollapsed && user && (
            <div className="mb-2 text-sm text-muted-foreground">{user.email}</div>
          )}
          <Button variant="outline" size="sm" className="w-full" onClick={logout}>
            {sidebarCollapsed ? 'X' : 'Logout'}
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="flex h-16 items-center border-b bg-card px-6">
          <h1 className="text-lg font-semibold">
            {navigation.find((item) => pathname.startsWith(item.href))?.name ?? 'Dashboard'}
          </h1>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
