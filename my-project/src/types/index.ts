export type TrendDirection = 'up' | 'down'

export interface Trend {
  value: number
  direction: TrendDirection
  label?: string
}

export interface NavItem {
  id: string
  label: string
  path: string
  icon: string
}

export interface NavGroup {
  id: string
  label: string
  items: NavItem[]
}

export interface UserProfile {
  id: string
  name: string
  avatarUrl?: string
  unreadNotifications: number
}
