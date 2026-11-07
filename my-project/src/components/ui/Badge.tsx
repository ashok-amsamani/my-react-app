import type { TrendDirection } from '@/types'

interface BadgeProps {
  value: string
  direction?: TrendDirection
}

export function Badge({ value, direction }: BadgeProps) {
  const tone = direction === 'down' ? 'badge--down' : 'badge--up'
  return <span className={`badge ${tone}`}>{value}</span>
}
