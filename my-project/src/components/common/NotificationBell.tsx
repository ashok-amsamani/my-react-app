interface NotificationBellProps {
  count?: number
  onClick?: () => void
}

export function NotificationBell({ count = 0, onClick }: NotificationBellProps) {
  return (
    <button
      type="button"
      className="notification-bell"
      aria-label={`Notifications${count ? `, ${count} unread` : ''}`}
      onClick={onClick}
    >
      <span aria-hidden="true" className="notification-bell__icon" />
      {count > 0 ? <span className="notification-bell__badge">{count}</span> : null}
    </button>
  )
}
