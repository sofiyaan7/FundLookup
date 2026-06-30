import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, FileText } from 'lucide-react'
import { fundDetails } from '@/data/funds'
import { manager } from '@/data/manager'
import { NavLineChart, AumBarChart, SectorPieChart } from '@/components/charts/Charts'

export default function FundDetails() {
  const { slug } = useParams<{ slug: string }>()
  const fund = slug ? fundDetails[slug] : undefined

  if (!fund) {
    return (
      <div className="mx-auto max-w-3xl py-20 text-center">
        <p className="text-lg font-semibold">Fund not found</p>
        <Link to="/" className="btn-secondary mt-4 inline-flex">Back to Dashboard</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-fg transition-colors hover:text-accent">
        <ArrowLeft size={15} /> Back to profile
      </Link>

      <div className="panel p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <span className="chip mb-2">{fund.category}</span>
            <h1 className="font-display text-2xl font-bold tracking-tight">{fund.name}</h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/80">{fund.overview}</p>
          </div>
          <span className="chip border-accent/30 text-accent">{fund.status}</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Metric label="AUM" value={fund.aum} />
          <Metric label="Expense Ratio" value={fund.expenseRatio} />
          <Metric label="1Y Returns" value={fund.returns1Y} highlight />
          <Metric label="Benchmark" value={fund.benchmark} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="panel p-5 lg:p-6">
          <h3 className="mb-4 font-display text-base font-semibold">NAV History</h3>
          <NavLineChart data={fund.navHistory} />
        </div>
        <div className="panel p-5 lg:p-6">
          <h3 className="mb-4 font-display text-base font-semibold">AUM Growth (₹ Cr)</h3>
          <AumBarChart data={fund.aumHistory} />
        </div>
      </div>

      <div className="panel overflow-hidden">
        <div className="border-b border-border px-5 py-4">
          <h3 className="font-display text-base font-semibold">Returns Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-fg">
                <th className="px-5 py-3 font-medium">Period</th>
                <th className="px-3 py-3 font-medium">Fund</th>
                <th className="px-3 py-3 font-medium">Benchmark</th>
                <th className="px-3 py-3 font-medium">Category Avg</th>
              </tr>
            </thead>
            <tbody>
              {fund.returnsTable.map((r) => (
                <tr key={r.period} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-3.5 font-medium">{r.period}</td>
                  <td className="px-3 py-3.5 font-medium text-accent">{r.fund}</td>
                  <td className="px-3 py-3.5 text-muted-fg">{r.benchmark}</td>
                  <td className="px-3 py-3.5 text-muted-fg">{r.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="panel p-5 lg:p-6">
          <h3 className="mb-2 font-display text-base font-semibold">Sector Exposure</h3>
          <SectorPieChart data={fund.sectorAllocation} />
          <div className="mt-3 grid grid-cols-2 gap-2">
            {fund.sectorAllocation.map((s) => (
              <div key={s.sector} className="flex items-center justify-between text-xs">
                <span className="text-muted-fg">{s.sector}</span>
                <span className="font-medium">{s.weight}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5 lg:p-6">
          <h3 className="mb-4 font-display text-base font-semibold">Top Holdings</h3>
          <div className="space-y-3">
            {fund.topHoldings.map((h) => (
              <div key={h.name} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{h.name}</p>
                  <p className="text-xs text-muted-fg">{h.sector}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(h.weight * 8, 100)}%` }} />
                  </div>
                  <span className="w-10 text-right text-sm font-medium">{h.weight}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="panel p-5 lg:p-6">
          <h3 className="mb-4 font-display text-base font-semibold">Risk Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            {fund.riskMetrics.map((r) => (
              <div key={r.label} className="rounded-xl border border-border bg-bg/40 p-3">
                <p className="text-[11px] uppercase tracking-wide text-muted-fg">{r.label}</p>
                <p className="mt-1 font-display text-lg font-semibold">{r.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5 lg:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-base font-semibold">Fund Documents</h3>
          </div>
          <div className="space-y-2.5">
            {fund.documents.map((d) => (
              <div key={d.name} className="flex items-center justify-between rounded-xl border border-border bg-bg/40 px-3.5 py-3">
                <div className="flex items-center gap-2.5">
                  <FileText size={16} className="text-accent2" />
                  <div>
                    <p className="text-sm font-medium">{d.name}</p>
                    <p className="text-xs text-muted-fg">{d.type} · {d.date}</p>
                  </div>
                </div>
                <Download size={15} className="text-muted-fg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel p-5 lg:p-6">
        <h3 className="mb-1 font-display text-base font-semibold">Fund Manager</h3>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/30 to-accent2/30 font-display text-sm font-bold">
            {manager.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <Link to="/" className="text-sm font-semibold hover:text-accent">{manager.name}</Link>
            <p className="text-xs text-muted-fg">{manager.designation} · {manager.currentAmc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Metric({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-bg/40 p-3.5">
      <p className="text-[11px] uppercase tracking-wide text-muted-fg">{label}</p>
      <p className={`mt-1 font-display text-lg font-semibold ${highlight ? 'text-accent' : ''}`}>{value}</p>
    </div>
  )
}
