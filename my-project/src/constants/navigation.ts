import type { NavGroup } from '@/types'

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'general',
    label: 'General',
    items: [
      { id: 'dashboard', label: 'Dashboard', path: '/', icon: 'dashboard' },
      { id: 'history', label: 'History', path: '/history', icon: 'history' },
      {
        id: 'categories',
        label: 'Categories',
        path: '/categories',
        icon: 'categories',
      },
      {
        id: 'schedule-payment',
        label: 'Schedule Payment',
        path: '/schedule-payment',
        icon: 'schedule',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      { id: 'accounts', label: 'Accounts', path: '/accounts', icon: 'accounts' },
      { id: 'cards', label: 'Cards', path: '/cards', icon: 'cards' },
      {
        id: 'saving-plans',
        label: 'Saving Plans',
        path: '/saving-plans',
        icon: 'savings',
      },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    items: [
      { id: 'settings', label: 'Settings', path: '/settings', icon: 'settings' },
      {
        id: 'help',
        label: 'Help & Support',
        path: '/help',
        icon: 'help',
      },
    ],
  },
]

export const APP_NAME = 'EXPENSIFY'
