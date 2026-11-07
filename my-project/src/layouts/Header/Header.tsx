import { Avatar } from '@/components/ui'
import { NotificationBell, SearchBar } from '@/components/common'
import { formatDateTime } from '@/utils'
import type { UserProfile } from '@/types'

interface HeaderProps {
  user: UserProfile
}

export function Header({ user }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__greeting">
        <h1>Hello, {user.name}</h1>
        <p>Track your all expense and income here…</p>
      </div>

      <div className="header__actions">
        <time dateTime={new Date().toISOString()}>
          {formatDateTime(new Date())}
        </time>
        <SearchBar />
        <NotificationBell count={user.unreadNotifications} />
        <Avatar name={user.name} src={user.avatarUrl} />
      </div>
    </header>
  )
}
