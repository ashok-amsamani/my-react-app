import { Button, Card } from '@/components/ui'
import type { CategoryShare } from '@/features/dashboard/types'

interface TopCategoryChartProps {
  categories: CategoryShare[]
}

export function TopCategoryChart({ categories }: TopCategoryChartProps) {
  return (
    <Card className="top-category-chart">
      <header>
        <h2>Top Category</h2>
      </header>
      {/* Donut chart integration goes here */}
      <ul aria-label="Category breakdown">
        {categories.map((category) => (
          <li key={category.id}>
            <span style={{ color: category.color }}>{category.label}</span>
            <span>{category.percentage}%</span>
          </li>
        ))}
      </ul>
      <Button variant="ghost">More Details…</Button>
    </Card>
  )
}
