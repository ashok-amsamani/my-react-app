import { BillsSubscriptions } from '@/features/dashboard/components/BillsSubscriptions'
import { MonthlyExpensesChart } from '@/features/dashboard/components/MonthlyExpensesChart'
import { RecentExpensesTable } from '@/features/dashboard/components/RecentExpensesTable'
import { SummaryCards } from '@/features/dashboard/components/SummaryCards'
import { TopCategoryChart } from '@/features/dashboard/components/TopCategoryChart'
import { useDashboardData } from '@/features/dashboard/hooks/useDashboardData'

export function DashboardPage() {
  const {
    summaryMetrics,
    monthlyExpenses,
    topCategories,
    recentExpenses,
    bills,
  } = useDashboardData()

  return (
    <div className="dashboard-page">
      <SummaryCards metrics={summaryMetrics} />

      <section className="dashboard-page__charts" aria-label="Expense charts">
        <MonthlyExpensesChart data={monthlyExpenses} />
        <TopCategoryChart categories={topCategories} />
      </section>

      <section className="dashboard-page__bottom" aria-label="Recent activity">
        <RecentExpensesTable rows={recentExpenses} />
        <BillsSubscriptions bills={bills} />
      </section>
    </div>
  )
}
