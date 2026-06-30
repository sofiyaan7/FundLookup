export interface CareerEntry {
  id: string
  startYear: string
  endYear: string
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
    startYear: '2020',
    endYear: 'Present',
    title: 'Senior Fund Manager — Equity',
    company: 'HDFC Mutual Fund',
    companyLogo: 'HDFC',
    responsibilities: [
      'Lead portfolio manager for the Flexicap and Large & Midcap equity mandates',
      'Chair the internal Equity Research Review Committee',
      'Oversee sector allocation strategy across ₹42,850 Cr in active AUM',
    ],
    achievements: [
      'Flexicap Fund delivered 18.4% CAGR since inception under management',
      'Ranked in the top decile (Crisil Rank 1) for 9 consecutive quarters',
    ],
    fundsManaged: ['HDFC Flexicap Fund', 'HDFC Large & Midcap Fund', 'HDFC Focused Equity Fund'],
  },
  {
    id: 'exp-2',
    startYear: '2016',
    endYear: '2020',
    title: 'Head of Equity Research',
    company: 'Invesco India',
    companyLogo: 'INVESCO',
    responsibilities: [
      'Managed a 6-member equity research desk covering BFSI and IT sectors',
      'Co-managed the India Business Cycle Fund from launch',
    ],
    achievements: [
      'Launched and scaled the India Business Cycle Fund to ₹3,200 Cr AUM',
      'Recognized as "Rising Fund Manager of the Year" — Outlook Money, 2019',
    ],
    fundsManaged: ['Invesco India Business Cycle Fund', 'Invesco India Contra Fund'],
  },
  {
    id: 'exp-3',
    startYear: '2012',
    endYear: '2016',
    title: 'Portfolio Manager',
    company: 'Fidelity Investments India',
    companyLogo: 'FIDELITY',
    responsibilities: [
      'Managed a concentrated 25-stock large-cap portfolio for institutional clients',
      'Built the firm\'s first quantitative screening model for quality-growth stocks',
    ],
    achievements: [
      'Outperformed Nifty 50 benchmark by an average of 410 bps annually',
    ],
    fundsManaged: ['Fidelity India Growth Fund'],
  },
  {
    id: 'exp-4',
    startYear: '2009',
    endYear: '2012',
    title: 'Equity Research Analyst',
    company: 'Kotak Securities',
    companyLogo: 'KOTAK',
    responsibilities: [
      'Covered the Banking & NBFC sector for institutional clients',
      'Published 40+ initiation and update reports',
    ],
    achievements: [
      'Top-rated BFSI analyst, Asiamoney Brokers Poll, 2011',
    ],
    fundsManaged: [],
  },
]

export interface CareerMilestone {
  year: string
  label: string
}

export const careerMilestones: CareerMilestone[] = [
  { year: '2009', label: 'Joined Kotak Securities as Equity Research Analyst' },
  { year: '2011', label: 'Top-rated BFSI analyst, Asiamoney Brokers Poll' },
  { year: '2012', label: 'Joined Fidelity Investments India as Portfolio Manager' },
  { year: '2016', label: 'Joined Invesco India as Head of Equity Research' },
  { year: '2019', label: 'Launched the India Business Cycle Fund' },
  { year: '2020', label: 'Joined HDFC Mutual Fund as Senior Fund Manager' },
  { year: '2025', label: 'Managing Flexicap, Large & Midcap and Focused Equity mandates' },
]
