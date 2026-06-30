export interface Manager {
  id: string
  name: string
  designation: string
  currentAmc: string
  companyLogo: string
  profileImage: string
  yearsExperience: number
  verified: boolean
  location: string
  languages: string[]
  email: string
  website: string
  linkedin: string
  twitter: string
  investmentStyle: string
  sectorExpertise: string[]
  riskPhilosophy: string
  investmentHorizon: string
  bio: string
}

export const manager: Manager = {
  id: 'mgr-001',
  name: 'Rajiv Mehta',
  designation: 'Senior Fund Manager — Equity',
  currentAmc: 'HDFC Mutual Fund',
  companyLogo: 'HDFC',
  profileImage: '',
  yearsExperience: 17,
  verified: true,
  location: 'Mumbai, Maharashtra, India',
  languages: ['English', 'Hindi', 'Gujarati'],
  email: 'rajiv.mehta@hdfcfund.com',
  website: 'https://hdfcfund.com/team/rajiv-mehta',
  linkedin: 'https://linkedin.com/in/rajiv-mehta-cfa',
  twitter: 'https://twitter.com/rajivmehta_cfa',
  investmentStyle: 'Growth at a Reasonable Price (GARP)',
  sectorExpertise: ['Banking & Financial Services', 'Information Technology', 'Consumer Discretionary', 'Healthcare'],
  riskPhilosophy: 'Capital preservation first, compounding second. Concentrated conviction bets sized by downside risk, not upside potential.',
  investmentHorizon: '3–5 year structural holding period',
  bio: 'Rajiv has spent over 17 years navigating Indian equity markets across three market cycles, with a track record of consistent alpha generation in flexicap and large-cap mandates.',
}

export interface KeyStat {
  label: string
  value: string
  suffix?: string
  numericValue: number
  icon: 'aum' | 'funds' | 'active' | 'exited' | 'cagr' | 'tenure' | 'amc' | 'experience'
}

export const keyStats: KeyStat[] = [
  { label: 'Assets Under Management', value: '₹42,850', suffix: 'Cr', numericValue: 42850, icon: 'aum' },
  { label: 'Funds Managed (Lifetime)', value: '9', numericValue: 9, icon: 'funds' },
  { label: 'Active Funds', value: '4', numericValue: 4, icon: 'active' },
  { label: 'Exited Funds', value: '5', numericValue: 5, icon: 'exited' },
  { label: 'Average CAGR', value: '16.8', suffix: '%', numericValue: 16.8, icon: 'cagr' },
  { label: 'Longest Tenure', value: '6.2', suffix: ' yrs', numericValue: 6.2, icon: 'tenure' },
  { label: 'Current AMC', value: 'HDFC MF', numericValue: 0, icon: 'amc' },
  { label: 'Total Experience', value: '17', suffix: ' yrs', numericValue: 17, icon: 'experience' },
]
