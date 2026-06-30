import { motion } from 'framer-motion'
import { careerMilestones } from '@/data/timeline'

export function CareerMilestonesTimeline() {
  return (
    <div className="panel p-5 lg:p-6">
      <h3 className="mb-6 font-display text-base font-semibold">Career Journey</h3>
      <div className="relative ml-2 space-y-7 border-l border-border pl-6">
        {careerMilestones.map((m, idx) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="font-mono text-xs font-semibold text-accent">{m.year}</p>
            <p className="mt-1 text-sm text-white/90">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
