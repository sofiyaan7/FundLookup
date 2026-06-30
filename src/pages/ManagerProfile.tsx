import { ProfileHero } from '@/components/profile/ProfileHero'
import { KeyStatsGrid } from '@/components/profile/KeyStatsGrid'
import { ProfileAccordions } from '@/components/profile/ProfileAccordions'
import { CareerTimeline } from '@/components/timeline/CareerTimeline'
import { CareerMilestonesTimeline } from '@/components/timeline/CareerMilestonesTimeline'
import { CurrentFundsTable } from '@/components/funds/CurrentFundsTable'
import { PreviousFundsTimeline } from '@/components/funds/PreviousFundsTimeline'
import { manager } from '@/data/manager'

export default function ManagerProfile() {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <ProfileHero />
      <KeyStatsGrid />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <div className="panel p-5 lg:p-6">
            <h3 className="mb-2 font-display text-base font-semibold">About</h3>
            <p className="text-sm leading-relaxed text-white/80">{manager.bio}</p>
          </div>

          <CareerTimeline />
          <CareerMilestonesTimeline />
          <CurrentFundsTable />
          <PreviousFundsTimeline />
        </div>

        <div className="lg:sticky lg:top-20 lg:self-start">
          <ProfileAccordions />
        </div>
      </div>
    </div>
  )
}
