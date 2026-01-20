import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui'

export default function PaymentListPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Payment list will be displayed here.</p>
      </CardContent>
    </Card>
  )
}
