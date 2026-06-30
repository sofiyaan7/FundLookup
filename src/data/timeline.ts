export interface CareerEntry {
  id: string
  period: string
  title: string
  company: string
  companyLogo: string
  responsibilities: string[]
  achievements: string[]
  fundsManaged: string[]
}

export const careerTimeline: CareerEntry[] = [
  {
    id: 'exp-1',
    period: '2020 – Present',
    title: 'Senior Fund Manager',
    company: 'HDFC Asset Management Company',
    companyLogo: '/hdfc-logo.svg',
    responsibilities: [
      'Managing flagship equity funds with a focus on long-term compounding.',
      'Overseeing investment strategy, risk management, and portfolio construction.',
      'Leading a disciplined approach to value and business cycle investing.',
    ],
    achievements: [
      'Steered HDFC equity mandates with a consistent focus on high-quality businesses.',
      'Built a professional track record across flexi-cap and focused strategies.',
    ],
    fundsManaged: ['HDFC Flexi Cap Fund', 'HDFC Focused Fund'],
  },
  {
    id: 'exp-2',
    period: '2007 – 2020',
    title: 'Fund Manager',
    company: 'Invesco Asset Management India',
    companyLogo: 'INVESCO',
    responsibilities: [
      'Managed multiple diversified equity schemes across market capitalizations.',
      'Conducted bottom-up stock selection and long-horizon portfolio construction.',
    ],
    achievements: [
      'Built a strong record across large-cap and mid-cap equity mandates.',
      'Developed deep experience in value-oriented stock picking and portfolio risk control.',
    ],
    fundsManaged: ['Invesco India Contra Fund', 'Invesco India Mid Cap Fund'],
  },
  {
    id: 'exp-3',
    period: 'Prior Experience',
    title: 'Equity Research',
    company: 'DBS Cholamandalam AMC',
    companyLogo: 'DBS',
    responsibilities: [
      'Supported equity research and sector analysis.',
      'Contributed to stock selection and research-driven portfolio decisions.',
    ],
    achievements: [
      'Gained early experience in evaluating business quality and valuation discipline.',
    ],
    fundsManaged: [],
  },
  {
    id: 'exp-4',
    period: 'Prior Experience',
    title: 'Banking Sector Specialist',
    company: 'Fidelity Investments',
    companyLogo: 'FIDELITY',
    responsibilities: [
      'Focus on banking and financial sector research.',
      'Contributed to sector specialization and investment assessments.',
    ],
    achievements: [
      'Built deep domain expertise in financial services and market structure.',
    ],
    fundsManaged: [],
  },
]

export interface CareerMilestone {
  year: string
  label: string
}

export const careerMilestones: CareerMilestone[] = [
  { year: '2007', label: 'Joined Invesco Asset Management India as Fund Manager' },
  { year: '2010', label: 'Managing Since 31 October 2010 at HDFC Mutual Fund' },
  { year: '2015', label: 'Built a strong track record across diversified equity strategies' },
  { year: '2020', label: 'Promoted to Senior Fund Manager at HDFC Asset Management Company' },
  { year: '2025', label: 'Continuing to oversee flagship equity mandates with a long-term investment approach' },
]
