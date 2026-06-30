import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search as SearchIcon, ArrowUpRight } from 'lucide-react'
import { managersList } from '@/data/managers'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return managersList
    return managersList.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.amc.toLowerCase().includes(q) ||
        m.designation.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight">Search</h1>
        <p className="mt-1 text-sm text-muted-fg">Find fund managers by name, designation, or AMC.</p>
      </div>

      <div className="relative">
        <SearchIcon size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-fg" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a manager name, AMC, or role..."
          className="w-full rounded-2xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm outline-none transition-colors focus:border-accent2/60"
        />
      </div>

      <div className="space-y-2.5">
        {results.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-fg">No managers match "{query}"</p>
        )}
        {results.map((m) => (
          <button
            key={m.id}
            onClick={() => navigate(m.id === 'mgr-001' ? '/' : '/managers')}
            className="flex w-full items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-glow"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent2/30 font-display text-sm font-bold">
                {m.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-semibold">{m.name}</p>
                <p className="text-xs text-muted-fg">{m.designation} · {m.amc}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="hidden text-muted-fg sm:inline">{m.aum}</span>
              <ArrowUpRight size={15} className="text-muted-fg" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
