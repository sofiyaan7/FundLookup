import { useNavigate } from 'react-router-dom'
import { ArrowUpRight, TrendingUp, Users, PiggyBank, Building2 } from 'lucide-react'
import { managersList } from '@/data/managers'
import { CountUp } from '@/components/ui/CountUp'

const overviewStats = [
  { label: 'Tracked Managers', value: 248, icon: Users },
  { label: 'Active Funds', value: 612, icon: PiggyBank },
  { label: 'Total AUM Tracked', value: 18.4, suffix: ' L Cr', decimals: 1, icon: TrendingUp },
  { label: 'AMCs Covered', value: 41, icon: Building2 },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-tight">Manager Analytics Dashboard</h1>
        <p className="mt-1 text-sm text-muted-fg">Track performance, tenure, and fund history across India's leading fund managers.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {overviewStats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <s.icon size={17} />
            </div>
            <p className="mt-4 font-display text-xl font-bold lg:text-2xl">
              <CountUp value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ''} />
            </p>
            <p className="mt-1 text-xs text-muted-fg">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-display text-base font-semibold">Featured Fund Managers</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-fg">
                <th className="px-5 py-3 font-medium">Manager</th>
                <th className="px-3 py-3 font-medium">AMC</th>
                <th className="px-3 py-3 font-medium">AUM</th>
                <th className="px-3 py-3 font-medium">Experience</th>
                <th className="px-3 py-3 font-medium">Avg CAGR</th>
                <th className="px-5 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {managersList.map((m) => (
                <tr
                  key={m.id}
                  onClick={() => navigate(m.id === 'mgr-001' ? '/' : '/managers')}
                  className="cursor-pointer border-b border-border/60 transition-colors last:border-0 hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-3.5">
                    <p className="font-medium">{m.name}</p>
                    <p className="text-xs text-muted-fg">{m.designation}</p>
                  </td>
                  <td className="px-3 py-3.5 text-muted-fg">{m.amc}</td>
                  <td className="px-3 py-3.5">{m.aum}</td>
                  <td className="px-3 py-3.5 text-muted-fg">{m.experience}</td>
                  <td className="px-3 py-3.5 font-medium text-accent">{m.cagr}</td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-accent2/50 hover:text-accent2">
                      View Profile <ArrowUpRight size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
