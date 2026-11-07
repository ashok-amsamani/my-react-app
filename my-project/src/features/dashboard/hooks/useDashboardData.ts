import {
  bills,
  monthlyExpenses,
  recentExpenses,
  summaryMetrics,
  topCategories,
} from '@/features/dashboard/data/mockDashboard'

/** Temporary mock data hook — swap for API/service calls later. */
export function useDashboardData() {
  return {
    summaryMetrics,
    monthlyExpenses,
    topCategories,
    recentExpenses,
    bills,
  }
}
