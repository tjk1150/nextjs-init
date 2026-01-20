import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui'

export default function SettlementListPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settlements</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Settlement list will be displayed here.</p>
      </CardContent>
    </Card>
  )
}
