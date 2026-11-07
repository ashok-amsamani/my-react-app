import { Card, Dropdown } from '@/components/ui'
import { formatCurrency } from '@/utils'
import type { BillItem } from '@/features/dashboard/types'

interface BillsSubscriptionsProps {
  bills: BillItem[]
}

export function BillsSubscriptions({ bills }: BillsSubscriptionsProps) {
  return (
    <Card className="bills-subscriptions">
      <header>
        <h2>Bill & Subscription</h2>
        <Dropdown
          aria-label="Bill range"
          options={[{ label: 'Recent', value: 'recent' }]}
          defaultValue="recent"
        />
      </header>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id}>
            <span
              className="bills-subscriptions__icon"
              style={{ backgroundColor: bill.iconColor }}
              aria-hidden="true"
            />
            <div>
              <p>{bill.name}</p>
              <time dateTime={bill.dueDate}>{bill.dueDate}</time>
            </div>
            <strong>{formatCurrency(bill.amount)}</strong>
          </li>
        ))}
      </ul>
    </Card>
  )
}
