import type { Trend } from '@/types'

export interface SummaryMetric {
  id: string
  title: string
  amount: number
  trend: Trend
  accountLabel?: string
}

export interface MonthlyExpensePoint {
  month: string
  amount: number
}

export interface CategoryShare {
  id: string
  label: string
  percentage: number
  color: string
}

export interface ExpenseRow {
  id: string
  serial: number
  amount: number
  category: string
  subCategory: string
  date: string
  mode: string
}

export interface BillItem {
  id: string
  name: string
  dueDate: string
  amount: number
  iconColor: string
}
