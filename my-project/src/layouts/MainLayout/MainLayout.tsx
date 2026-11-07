import type { ReactNode } from 'react'
import { Header } from '@/layouts/Header'
import { Sidebar } from '@/layouts/Sidebar'
import type { UserProfile } from '@/types'

interface MainLayoutProps {
  children: ReactNode
  user: UserProfile
  activePath?: string
}

export function MainLayout({
  children,
  user,
  activePath = '/',
}: MainLayoutProps) {
  return (
    <div className="main-layout">
      <Sidebar activePath={activePath} />
      <div className="main-layout__content">
        <Header user={user} />
        <main className="main-layout__main">{children}</main>
      </div>
    </div>
  )
}
