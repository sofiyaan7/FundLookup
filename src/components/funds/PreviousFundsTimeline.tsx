import { History } from 'lucide-react'
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
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold">{f.name}</p>
                  <p className="text-xs text-muted-fg">{f.category}</p>
                </div>
                <span className="chip border-accent2/30 text-accent2">{f.overallReturn}</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-[13px] sm:grid-cols-3 lg:grid-cols-6">
                <Stat label="Period" value={f.period} />
                <Stat label="Tenure" value={f.tenure} />
                <Stat label="Overall Return" value={f.overallReturn} />
                <Stat label="Benchmark" value={f.benchmark} />
                <Stat label="Start AUM" value={f.startAum} />
                <Stat label="Exit AUM" value={f.exitAum} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-muted-fg">{label}</p>
      <p className="mt-0.5 text-white/90">{value}</p>
    </div>
  )
}
