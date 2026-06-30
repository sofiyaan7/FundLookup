import { BadgeCheck, Linkedin, Globe } from 'lucide-react'
import { manager } from '@/data/manager'

export function ProfileHero() {
  return (
    <div className="panel relative overflow-hidden p-6 lg:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-accent/30 to-accent2/30 ring-1 ring-border">
            <div className="flex h-full w-full items-center justify-center font-display text-3xl font-bold text-white">
              {manager.name.split(' ').map((n) => n[0]).join('')}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-2xl font-bold tracking-tight lg:text-[28px]">{manager.name}</h1>
              {manager.verified && (
                <span title="Verified Manager" className="text-accent2">
                  <BadgeCheck size={20} fill="currentColor" className="text-accent2 [&>path]:stroke-card" />
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-fg">{manager.designation}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
              <span className="chip">
                <span className="h-4 w-4 rounded-[4px] bg-accent2/20 text-[9px] font-bold leading-4 text-accent2 text-center">
                  {manager.companyLogo[0]}
                </span>
                {manager.currentAmc}
              </span>
              <span className="chip">{manager.yearsExperience} yrs experience</span>
              <span className="chip">{manager.location}</span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 gap-2.5">
          <a href={manager.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={manager.website} target="_blank" rel="noreferrer" className="btn-primary">
            <Globe size={16} /> Website
          </a>
        </div>
      </div>
    </div>
  )
}
