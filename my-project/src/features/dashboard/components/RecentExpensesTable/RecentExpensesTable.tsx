import { Button, Card, Dropdown } from '@/components/ui'
import { formatCurrency } from '@/utils'
import type { ExpenseRow } from '@/features/dashboard/types'

interface RecentExpensesTableProps {
  rows: ExpenseRow[]
}

export function RecentExpensesTable({ rows }: RecentExpensesTableProps) {
  return (
    <Card className="recent-expenses">
      <header>
        <h2>Recent Expenses</h2>
        <div>
          <Button variant="outline">Filter</Button>
          <Dropdown
            aria-label="Sort expenses"
            options={[{ label: 'Recent', value: 'recent' }]}
            defaultValue="recent"
          />
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Sub-Category</th>
            <th>Date</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.serial}</td>
              <td>{formatCurrency(row.amount)}</td>
              <td>{row.category}</td>
              <td>{row.subCategory}</td>
              <td>{row.date}</td>
              <td>{row.mode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
