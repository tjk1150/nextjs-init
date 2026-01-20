'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui'
import { useAuthStore } from '@/shared/store'

export default function UserProfilePage() {
  const user = useAuthStore((state) => state.user)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <CardContent>
        {user ? (
          <div className="space-y-2">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        ) : (
          <p className="text-muted-foreground">Please log in to view your profile.</p>
        )}
      </CardContent>
    </Card>
  )
}
