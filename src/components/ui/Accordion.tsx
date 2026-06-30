import { ReactNode, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

interface AccordionProps {
  title: string
  icon?: ReactNode
  defaultOpen?: boolean
  children: ReactNode
  badge?: string | number
}

export function Accordion({ title, icon, defaultOpen = false, children, badge }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="panel overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition-colors hover:bg-white/[0.02]"
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          {icon && <span className="text-accent">{icon}</span>}
          <span className="font-display text-[15px] font-semibold">{title}</span>
          {badge !== undefined && (
            <span className="chip">{badge}</span>
          )}
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={18} className="text-muted-fg" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={cn('border-t border-border px-5 py-4')}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
