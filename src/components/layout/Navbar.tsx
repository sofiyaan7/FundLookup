import { useNavigate } from 'react-router-dom'
import { Search, Bell, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-bg/80 px-5 backdrop-blur-md dark:bg-bg/80 lg:px-8">
      <div className="relative flex-1 max-w-md">
        <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-fg" />
        <input
          type="text"
          placeholder="Search managers, funds, companies..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') navigate('/search')
          }}
          className="w-full rounded-xl border border-border bg-card py-2 pl-9 pr-3 text-sm text-white placeholder:text-muted-fg outline-none transition-colors focus:border-accent2/60"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-fg transition-colors hover:border-accent/40 hover:text-accent"
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-fg transition-colors hover:border-accent2/40 hover:text-accent2"
          aria-label="Notifications"
        >
          <Bell size={17} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
        </button>

        <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border bg-gradient-to-br from-accent/30 to-accent2/30 text-sm font-semibold">
          RM
        </button>
      </div>
    </header>
  )
}
