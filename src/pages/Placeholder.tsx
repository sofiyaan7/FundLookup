import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { managersList } from '@/data/managers'

interface PlaceholderProps {
  title: string
  description: string
  icon: ReactNode
}

export function PlaceholderPage({ title, description, icon }: PlaceholderProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center py-24 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        {icon}
      </div>
      <h1 className="font-display text-xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-muted-fg">{description}</p>
      <p className="mt-6 chip">Connect a backend API to populate this section</p>
    </div>
  )
}

export function ManagersPage() {
  const navigate = useNavigate()
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight">All Managers</h1>
        <p className="mt-1 text-sm text-muted-fg">Browse the full directory of tracked fund managers.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {managersList.map((m) => (
          <button
            key={m.id}
            onClick={() => navigate(m.id === 'mgr-001' ? '/' : '/managers')}
            className="stat-card text-left"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent2/30 font-display text-sm font-bold">
                {m.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <ArrowUpRight size={15} className="text-muted-fg" />
            </div>
            <p className="mt-3 text-sm font-semibold">{m.name}</p>
            <p className="text-xs text-muted-fg">{m.designation}</p>
            <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs">
              <span className="text-muted-fg">{m.amc}</span>
              <span className="font-medium text-accent">{m.cagr} CAGR</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
