import { Badge, Card, Dropdown } from '@/components/ui'
import { formatCurrency } from '@/utils'
import type { SummaryMetric } from '@/features/dashboard/types'

interface SummaryCardsProps {
  metrics: SummaryMetric[]
}

export function SummaryCards({ metrics }: SummaryCardsProps) {
  return (
    <section className="summary-cards" aria-label="Summary metrics">
      {metrics.map((metric) => (
        <Card key={metric.id} className="summary-card">
          <header className="summary-card__header">
            <h2>{metric.title}</h2>
            {metric.accountLabel ? (
              <Dropdown
                aria-label="Select account"
                options={[{ label: metric.accountLabel, value: metric.accountLabel }]}
                defaultValue={metric.accountLabel}
              />
            ) : null}
          </header>
          <p className="summary-card__amount">{formatCurrency(metric.amount)}</p>
          <Badge
            value={`${metric.trend.value}%`}
            direction={metric.trend.direction}
          />
        </Card>
      ))}
    </section>
  )
}
