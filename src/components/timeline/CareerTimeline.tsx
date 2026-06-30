import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Briefcase } from 'lucide-react'
import { careerTimeline } from '@/data/timeline'

export function CareerTimeline() {
  const [openId, setOpenId] = useState<string | null>(careerTimeline[0]?.id ?? null)

  return (
    <div className="panel p-5 lg:p-6">
      <div className="mb-5 flex items-center gap-2">
        <Briefcase size={18} className="text-accent" />
        <h3 className="font-display text-base font-semibold">Experience</h3>
      </div>

      <div className="relative space-y-0">
        {careerTimeline.map((entry, idx) => {
          const isOpen = openId === entry.id
          const isLast = idx === careerTimeline.length - 1
          return (
            <div key={entry.id} className="relative flex gap-4 pb-6">
              {!isLast && (
                <span className="absolute left-[15px] top-9 h-[calc(100%-20px)] w-px bg-border" />
              )}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/20 to-accent2/20 text-[10px] font-black tracking-[0.2em] text-accent shadow-[0_0_18px_rgba(56,189,248,0.16)]"
              >
                {entry.companyLogo.startsWith('/') ? (
                  <img src={entry.companyLogo} alt={entry.company} className="h-full w-full object-cover" />
                ) : (
                  entry.companyLogo.slice(0, 2)
                )}
              </motion.div>

              <div className="flex-1">
                <button
                  onClick={() => setOpenId(isOpen ? null : entry.id)}
                  className="flex w-full items-start justify-between gap-3 text-left"
                >
                  <div>
                    <p className="font-display text-sm font-semibold">{entry.title}</p>
                    <p className="text-sm text-accent2">{entry.company}</p>
                    <p className="mt-0.5 text-xs text-muted-fg">{entry.period}</p>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="mt-1 shrink-0 text-muted-fg">
                    <ChevronDown size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-3 rounded-xl border border-border bg-bg/40 p-4 text-sm">
                        <div>
                          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-fg">Responsibilities</p>
                          <ul className="space-y-1 text-[13px] text-white/90">
                            {entry.responsibilities.map((r, i) => (
                              <li key={i} className="flex gap-2"><span className="text-accent">›</span>{r}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-fg">Achievements</p>
                          <ul className="space-y-1 text-[13px] text-white/90">
                            {entry.achievements.map((a, i) => (
                              <li key={i} className="flex gap-2"><span className="text-accent">★</span>{a}</li>
                            ))}
                          </ul>
                        </div>
                        {entry.fundsManaged.length > 0 && (
                          <div>
                            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-fg">Funds Managed</p>
                            <div className="flex flex-wrap gap-1.5">
                              {entry.fundsManaged.map((f) => (
                                <motion.span
                                  key={f}
                                  whileHover={{ scale: 1.04, y: -1 }}
                                  className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent shadow-[0_0_12px_rgba(56,189,248,0.12)]"
                                >
                                  {f}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
