import { GraduationCap, Award as AwardIcon, ShieldCheck, User, Mail, Globe, Linkedin, Twitter } from 'lucide-react'
import { Accordion } from '@/components/ui/Accordion'
import { education, certifications, awards } from '@/data/education'
import { manager } from '@/data/manager'

export function ProfileAccordions() {
  return (
    <div className="space-y-4">
      <Accordion title="Education" icon={<GraduationCap size={17} />} badge={education.length}>
        <div className="space-y-4">
          {education.map((e) => (
            <div key={e.id} className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">{e.institution}</p>
                <p className="text-[13px] text-muted-fg">{e.degree}</p>
              </div>
              <span className="font-mono text-xs text-muted-fg">{e.year}</span>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title="Certifications" icon={<ShieldCheck size={17} />} badge={certifications.length}>
        <div className="space-y-4">
          {certifications.map((c) => (
            <div key={c.id} className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent2/10 text-accent2">
                  <ShieldCheck size={13} />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">{c.name}</p>
                  <p className="text-[13px] text-muted-fg">{c.issuer}</p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-fg">{c.issueDate}</span>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title="Awards & Memberships" icon={<AwardIcon size={17} />} badge={awards.length}>
        <div className="space-y-4">
          {awards.map((a) => (
            <div key={a.id}>
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold">{a.title}</p>
                <span className="shrink-0 font-mono text-xs text-muted-fg">{a.year}</span>
              </div>
              <p className="text-[13px] text-accent2">{a.organization}</p>
              <p className="mt-1 text-[13px] text-muted-fg">{a.description}</p>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title="Personal Information" icon={<User size={17} />}>
        <div className="space-y-3 text-[13px]">
          <Row label="Location" value={manager.location} />
          <Row label="Languages" value={manager.languages.join(', ')} />
          <Row label="Investment Style" value={manager.investmentStyle} />
          <Row label="Sector Expertise" value={manager.sectorExpertise.join(', ')} />
          <Row label="Risk Philosophy" value={manager.riskPhilosophy} />
          <Row label="Investment Horizon" value={manager.investmentHorizon} />
          <div className="flex flex-wrap gap-2 pt-2">
            <a href={`mailto:${manager.email}`} className="chip hover:border-accent/40 hover:text-accent"><Mail size={12} /> Email</a>
            <a href={manager.website} target="_blank" rel="noreferrer" className="chip hover:border-accent2/40 hover:text-accent2"><Globe size={12} /> Website</a>
            <a href={manager.linkedin} target="_blank" rel="noreferrer" className="chip hover:border-accent2/40 hover:text-accent2"><Linkedin size={12} /> LinkedIn</a>
            <a href={manager.twitter} target="_blank" rel="noreferrer" className="chip hover:border-accent2/40 hover:text-accent2"><Twitter size={12} /> Twitter</a>
          </div>
        </div>
      </Accordion>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-border/60 pb-2.5 last:border-0">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-fg">{label}</span>
      <span className="text-white/90">{value}</span>
    </div>
  )
}
