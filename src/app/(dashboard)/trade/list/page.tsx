import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui'

export default function TradeListPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trade Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Trade order list will be displayed here.</p>
      </CardContent>
    </Card>
  )
}
