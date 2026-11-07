import { APP_NAME, NAV_GROUPS } from '@/constants'

interface SidebarProps {
  activePath?: string
}

export function Sidebar({ activePath = '/' }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="sidebar__brand">
        <span className="sidebar__logo" aria-hidden="true" />
        <span className="sidebar__title">{APP_NAME}</span>
      </div>

      <nav className="sidebar__nav">
        {NAV_GROUPS.map((group) => (
          <div key={group.id} className="sidebar__group">
            <p className="sidebar__group-label">{group.label}</p>
            <ul>
              {group.items.map((item) => {
                const isActive = item.path === activePath
                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className={
                        isActive
                          ? 'sidebar__link sidebar__link--active'
                          : 'sidebar__link'
                      }
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar__upgrade">
        <p>Upgrade to PRO for more features.</p>
      </div>
    </aside>
  )
}
