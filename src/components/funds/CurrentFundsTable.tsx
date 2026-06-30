import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { currentFunds } from '@/data/funds'

export function CurrentFundsTable() {
  const navigate = useNavigate()

  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h3 className="font-display text-base font-semibold">Active Funds</h3>
        <span className="chip">{currentFunds.length} funds</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-fg">
              <th className="px-5 py-3 font-medium">Fund Name</th>
              <th className="px-3 py-3 font-medium">Category</th>
              <th className="px-3 py-3 font-medium">AUM</th>
              <th className="px-3 py-3 font-medium">Expense Ratio</th>
              <th className="px-3 py-3 font-medium">Overall Return</th>
              <th className="px-3 py-3 font-medium">Start Date</th>
              <th className="px-3 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentFunds.map((fund) => (
              <tr
                key={fund.id}
                className="cursor-pointer border-b border-border/60 transition-colors last:border-0 hover:bg-white/[0.03]"
                onClick={() => navigate(`/funds/${fund.slug}`)}
              >
                <td className="px-5 py-3.5 font-medium">{fund.name}</td>
                <td className="px-3 py-3.5 text-muted-fg">{fund.category}</td>
                <td className="px-3 py-3.5">{fund.aum}</td>
                <td className="px-3 py-3.5 text-muted-fg">{fund.expenseRatio}</td>
                <td className="px-3 py-3.5 font-medium text-accent">{fund.overallReturn}</td>
                <td className="px-3 py-3.5 text-muted-fg">{fund.startDate}</td>
                <td className="px-3 py-3.5">
                  <span className="chip border-accent/30 text-accent">{fund.status}</span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/funds/${fund.slug}`)
                    }}
                    className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-accent2/50 hover:text-accent2"
                  >
                    View Details <ArrowUpRight size={13} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
