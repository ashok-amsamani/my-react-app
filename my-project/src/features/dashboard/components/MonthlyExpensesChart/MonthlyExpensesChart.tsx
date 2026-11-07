import { Card, Dropdown } from '@/components/ui'
import type { MonthlyExpensePoint } from '@/features/dashboard/types'

interface MonthlyExpensesChartProps {
  data: MonthlyExpensePoint[]
}

export function MonthlyExpensesChart({ data }: MonthlyExpensesChartProps) {
  return (
    <Card className="monthly-expenses-chart">
      <header>
        <h2>Monthly Expenses</h2>
        <Dropdown
          aria-label="Time range"
          options={[{ label: 'Recent', value: 'recent' }]}
          defaultValue="recent"
        />
      </header>
      {/* Chart library integration goes here */}
      <ul aria-label="Monthly expense values">
        {data.map((point) => (
          <li key={point.month}>
            {point.month}: {point.amount}
          </li>
        ))}
      </ul>
    </Card>
  )
}
