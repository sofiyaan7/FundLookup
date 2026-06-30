import { ArrowUpRight, BarChart3, History } from 'lucide-react'
import { previousFunds } from '@/data/funds'

export function PreviousFundsTimeline() {
  return (
    <div className="panel p-5 lg:p-6">
      <div className="mb-5 flex items-center gap-2">
        <History size={18} className="text-accent2" />
        <h3 className="font-display text-base font-semibold">Previous Funds</h3>
        <span className="chip">{previousFunds.length} exited</span>
      </div>

      <div className="relative space-y-5 border-l border-border pl-6">
        {previousFunds.map((f) => (
          <div key={f.id} className="relative">
            <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full border-2 border-accent2 bg-bg" />
            <div className="rounded-xl border border-border bg-bg/40 p-4 transition-colors hover:border-accent2/30">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{f.name}</p>
                  <p className="text-xs text-muted-fg">{f.category}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-sm font-semibold text-accent">
                    <ArrowUpRight size={14} />
                    {f.overallReturn}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent2/20 bg-accent2/10 px-2.5 py-1 text-sm font-semibold text-accent2">
                    <BarChart3 size={14} />
                    <span>{f.benchmark}</span>
                    <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[11px] font-medium text-white/90">{f.benchmarkReturn}</span>
                  </span>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-[13px] sm:grid-cols-3 lg:grid-cols-5">
                <Stat label="Period" value={formatPeriod(f.period)} secondary={f.tenure} />
                <Stat label="Manager Tenure Return" value={f.overallReturn} accent />
                <Stat label="Benchmark" value={f.benchmark} secondary={f.benchmarkReturn} accent />
                <Stat label="Start AUM (₹ Cr)" value={formatAumValue(f.startAum)} />
                <Stat label="Exit AUM (₹ Cr)" value={formatAumValue(f.exitAum)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Stat({ label, value, secondary, accent }: { label: string; value: string; secondary?: string; accent?: boolean }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-muted-fg">{label}</p>
      <div className={`mt-0.5 ${accent ? 'text-accent2' : 'text-white/90'}`}>
        <p className="font-medium">{value}</p>
        {secondary ? <p className="mt-0.5 text-[11px] font-normal text-muted-fg">{secondary}</p> : null}
      </div>
    </div>
  )
}

function formatPeriod(period: string) {
  const [start, end] = period.split(/[-–]/).map((part) => part.trim())
  if (start && end && /^\d{4}$/.test(start) && /^\d{4}$/.test(end)) {
    return `Jan ${start} – Dec ${end}`
  }

  return period
}

function formatAumValue(value: string) {
  return value.replace(/₹|\s*Cr$/gi, '').trim()
}
