import { IndianRupee, Layers, CheckCircle2, XCircle, TrendingUp, Clock, Building, BriefcaseBusiness } from 'lucide-react'
import { keyStats } from '@/data/manager'
import { CountUp } from '@/components/ui/CountUp'

const iconMap = {
  aum: IndianRupee,
  funds: Layers,
  active: CheckCircle2,
  exited: XCircle,
  cagr: TrendingUp,
  tenure: Clock,
  amc: Building,
  experience: BriefcaseBusiness,
}

export function KeyStatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {keyStats.map((stat) => {
        const Icon = iconMap[stat.icon]
        return (
          <div key={stat.label} className="stat-card group">
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                <Icon size={17} />
              </div>
            </div>
            <p className="mt-4 font-display text-xl font-bold tracking-tight lg:text-2xl">
              {stat.numericValue > 0 ? (
                <CountUp
                  value={stat.numericValue}
                  decimals={stat.icon === 'cagr' || stat.icon === 'tenure' ? 1 : 0}
                  prefix={stat.icon === 'aum' ? '₹' : ''}
                  suffix={stat.icon === 'aum' ? ` ${stat.suffix ?? ''}` : stat.suffix ?? ''}
                />
              ) : (
                stat.value
              )}
            </p>
            <p className="mt-1 text-xs text-muted-fg">{stat.label}</p>
          </div>
        )
      })}
    </div>
  )
}
