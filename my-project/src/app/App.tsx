import { DashboardPage } from '@/features/dashboard'
import { MainLayout } from '@/layouts'
import type { UserProfile } from '@/types'

const currentUser: UserProfile = {
  id: '1',
  name: 'Ashok',
  unreadNotifications: 2,
}

export default function App() {
  return (
    <MainLayout user={currentUser} activePath="/">
      <DashboardPage />
    </MainLayout>
  )
}
