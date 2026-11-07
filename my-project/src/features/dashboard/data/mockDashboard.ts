import type {
  BillItem,
  CategoryShare,
  ExpenseRow,
  MonthlyExpensePoint,
  SummaryMetric,
} from '@/features/dashboard/types'

export const summaryMetrics: SummaryMetric[] = [
  {
    id: 'balance',
    title: 'Account Balance',
    amount: 221508.56,
    trend: { value: 12.5, direction: 'up' },
    accountLabel: 'SBI',
  },
  {
    id: 'monthly-expenses',
    title: 'Monthly Expenses',
    amount: 21508.56,
    trend: { value: 2.5, direction: 'down' },
  },
  {
    id: 'investment',
    title: 'Total Investment',
    amount: 1508.56,
    trend: { value: 2.5, direction: 'up' },
  },
  {
    id: 'goal',
    title: 'Goal',
    amount: 508.56,
    trend: { value: 2.5, direction: 'up' },
  },
]

export const monthlyExpenses: MonthlyExpensePoint[] = [
  { month: 'Jan', amount: 4200 },
  { month: 'Feb', amount: 3800 },
  { month: 'Mar', amount: 5100 },
  { month: 'Apr', amount: 4600 },
  { month: 'May', amount: 6200 },
  { month: 'Jun', amount: 5400 },
  { month: 'Jul', amount: 7100 },
  { month: 'Aug', amount: 4800 },
  { month: 'Sep', amount: 5900 },
  { month: 'Oct', amount: 6400 },
  { month: 'Nov', amount: 5700 },
  { month: 'Dec', amount: 6900 },
]

export const topCategories: CategoryShare[] = [
  { id: 'housing', label: 'Housing', percentage: 35, color: 'var(--color-chart-1)' },
  { id: 'food', label: 'Food', percentage: 25, color: 'var(--color-chart-2)' },
  { id: 'transport', label: 'Transport', percentage: 15, color: 'var(--color-chart-3)' },
  { id: 'shopping', label: 'Shopping', percentage: 15, color: 'var(--color-chart-4)' },
  { id: 'other', label: 'Other', percentage: 10, color: 'var(--color-chart-5)' },
]

export const recentExpenses: ExpenseRow[] = [
  {
    id: '1',
    serial: 1,
    amount: 1200,
    category: 'Food',
    subCategory: 'Groceries',
    date: '2025-06-28',
    mode: 'UPI',
  },
  {
    id: '2',
    serial: 2,
    amount: 450,
    category: 'Transport',
    subCategory: 'Fuel',
    date: '2025-06-27',
    mode: 'Card',
  },
]

export const bills: BillItem[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    dueDate: '2025-07-01',
    amount: 649,
    iconColor: '#e50914',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    dueDate: '2025-07-03',
    amount: 119,
    iconColor: '#1db954',
  },
  {
    id: 'youtube',
    name: 'Youtube',
    dueDate: '2025-07-05',
    amount: 129,
    iconColor: '#ff0000',
  },
  {
    id: 'adobe',
    name: 'Adobe',
    dueDate: '2025-07-08',
    amount: 1699,
    iconColor: '#ff0000',
  },
]
