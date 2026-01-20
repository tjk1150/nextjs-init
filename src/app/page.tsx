import Link from 'next/link'

import { Button } from '@/shared/ui'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/shared/ui'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Joeun</CardTitle>
          <CardDescription>Enterprise Frontend Application</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link href="/dashboard">
            <Button className="w-full">Dashboard</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="w-full">
              Login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  )
}
