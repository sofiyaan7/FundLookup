export interface FundSummary {
  id: string
  slug: string
  name: string
  category: string
  aum: string
  expenseRatio: string
  returns1Y: string
  startDate: string
  status: 'Active' | 'Exited'
}

export const currentFunds: FundSummary[] = [
  { id: 'f-1', slug: 'flexicap', name: 'HDFC Flexicap Fund', category: 'Equity — Flexicap', aum: '₹18,420 Cr', expenseRatio: '0.92%', returns1Y: '+22.4%', startDate: '12 Jan 2020', status: 'Active' },
  { id: 'f-2', slug: 'large-midcap', name: 'HDFC Large & Midcap Fund', category: 'Equity — Large & Midcap', aum: '₹14,100 Cr', expenseRatio: '0.88%', returns1Y: '+19.7%', startDate: '03 Mar 2020', status: 'Active' },
  { id: 'f-3', slug: 'focused-equity', name: 'HDFC Focused Equity Fund', category: 'Equity — Focused', aum: '₹6,830 Cr', expenseRatio: '0.95%', returns1Y: '+24.1%', startDate: '22 Jul 2021', status: 'Active' },
  { id: 'f-4', slug: 'business-cycle', name: 'HDFC Business Cycle Fund', category: 'Equity — Thematic', aum: '₹3,500 Cr', expenseRatio: '1.02%', returns1Y: '+17.9%', startDate: '14 Feb 2022', status: 'Active' },
]

export interface PreviousFund {
  id: string
  name: string
  category: string
  joinedDate: string
  exitedDate: string
  tenure: string
  performance: string
  reasonForExit: string
}

export const previousFunds: PreviousFund[] = [
  { id: 'pf-1', name: 'Invesco India Business Cycle Fund', category: 'Equity — Thematic', joinedDate: 'Jan 2016', exitedDate: 'Dec 2020', tenure: '5 yrs', performance: '+15.2% CAGR', reasonForExit: 'Transitioned to HDFC Mutual Fund' },
  { id: 'pf-2', name: 'Invesco India Contra Fund', category: 'Equity — Contra', joinedDate: 'Mar 2016', exitedDate: 'Dec 2020', tenure: '4.8 yrs', performance: '+13.9% CAGR', reasonForExit: 'Transitioned to HDFC Mutual Fund' },
  { id: 'pf-3', name: 'Fidelity India Growth Fund', category: 'Equity — Large Cap', joinedDate: 'Jun 2012', exitedDate: 'Feb 2016', tenure: '3.7 yrs', performance: '+14.6% CAGR', reasonForExit: 'Fund merged post Fidelity-L&T acquisition' },
  { id: 'pf-4', name: 'Invesco India Mid Cap Fund', category: 'Equity — Midcap', joinedDate: 'Jul 2017', exitedDate: 'Dec 2020', tenure: '3.4 yrs', performance: '+16.1% CAGR', reasonForExit: 'Transitioned to HDFC Mutual Fund' },
  { id: 'pf-5', name: 'Kotak Equity Opportunities Fund', category: 'Equity — Large & Midcap', joinedDate: 'Apr 2009', exitedDate: 'May 2012', tenure: '3.1 yrs', performance: '+12.8% CAGR', reasonForExit: 'Moved to portfolio management role at Fidelity' },
]

export interface NavPoint { date: string; nav: number }
export interface AumPoint { year: string; aum: number }
export interface ReturnRow { period: string; fund: string; benchmark: string; category: string }
export interface SectorAllocation { sector: string; weight: number }
export interface TopHolding { name: string; sector: string; weight: number }
export interface RiskMetric { label: string; value: string }
export interface FundDocument { name: string; type: string; date: string }

export interface FundDetail extends FundSummary {
  benchmark: string
  navHistory: NavPoint[]
  aumHistory: AumPoint[]
  returnsTable: ReturnRow[]
  sectorAllocation: SectorAllocation[]
  topHoldings: TopHolding[]
  riskMetrics: RiskMetric[]
  documents: FundDocument[]
  overview: string
}

export const fundDetails: Record<string, FundDetail> = {
  flexicap: {
    id: 'f-1',
    slug: 'flexicap',
    name: 'HDFC Flexicap Fund',
    category: 'Equity — Flexicap',
    aum: '₹18,420 Cr',
    expenseRatio: '0.92%',
    returns1Y: '+22.4%',
    startDate: '12 Jan 2020',
    status: 'Active',
    benchmark: 'Nifty 500 TRI',
    overview: 'An open-ended dynamic equity scheme investing across large, mid, and small-cap companies, designed to capture opportunities across the market-cap spectrum while managing downside risk through disciplined valuation screens.',
    navHistory: [
      { date: 'Jan 2021', nav: 32.4 }, { date: 'Jan 2022', nav: 41.8 }, { date: 'Jan 2023', nav: 44.2 },
      { date: 'Jan 2024', nav: 56.7 }, { date: 'Jan 2025', nav: 68.3 }, { date: 'Jun 2026', nav: 79.1 },
    ],
    aumHistory: [
      { year: '2021', aum: 4200 }, { year: '2022', aum: 7600 }, { year: '2023', aum: 10800 },
      { year: '2024', aum: 14500 }, { year: '2025', aum: 16900 }, { year: '2026', aum: 18420 },
    ],
    returnsTable: [
      { period: '1 Year', fund: '22.4%', benchmark: '18.1%', category: '17.6%' },
      { period: '3 Years', fund: '19.8%', benchmark: '15.9%', category: '15.2%' },
      { period: '5 Years', fund: '18.4%', benchmark: '14.7%', category: '14.1%' },
      { period: 'Since Inception', fund: '18.4%', benchmark: '13.9%', category: '13.5%' },
    ],
    sectorAllocation: [
      { sector: 'Financial Services', weight: 28.4 },
      { sector: 'Information Technology', weight: 17.2 },
      { sector: 'Consumer Discretionary', weight: 13.6 },
      { sector: 'Healthcare', weight: 10.1 },
      { sector: 'Industrials', weight: 9.3 },
      { sector: 'Energy', weight: 7.8 },
      { sector: 'Others', weight: 13.6 },
    ],
    topHoldings: [
      { name: 'HDFC Bank Ltd', sector: 'Financial Services', weight: 8.2 },
      { name: 'ICICI Bank Ltd', sector: 'Financial Services', weight: 6.7 },
      { name: 'Infosys Ltd', sector: 'Information Technology', weight: 5.9 },
      { name: 'Reliance Industries Ltd', sector: 'Energy', weight: 5.1 },
      { name: 'Larsen & Toubro Ltd', sector: 'Industrials', weight: 4.4 },
      { name: 'Titan Company Ltd', sector: 'Consumer Discretionary', weight: 3.8 },
    ],
    riskMetrics: [
      { label: 'Standard Deviation', value: '14.2%' },
      { label: 'Sharpe Ratio', value: '1.18' },
      { label: 'Beta', value: '0.94' },
      { label: 'Alpha', value: '4.1%' },
      { label: 'Sortino Ratio', value: '1.62' },
      { label: 'Max Drawdown', value: '-19.4%' },
    ],
    documents: [
      { name: 'Scheme Information Document', type: 'PDF', date: 'Updated May 2026' },
      { name: 'Factsheet — May 2026', type: 'PDF', date: '01 Jun 2026' },
      { name: 'Portfolio Disclosure', type: 'XLSX', date: '01 Jun 2026' },
      { name: 'Key Information Memorandum', type: 'PDF', date: 'Updated Apr 2026' },
    ],
  },
  'large-midcap': {
    id: 'f-2', slug: 'large-midcap', name: 'HDFC Large & Midcap Fund', category: 'Equity — Large & Midcap',
    aum: '₹14,100 Cr', expenseRatio: '0.88%', returns1Y: '+19.7%', startDate: '03 Mar 2020', status: 'Active',
    benchmark: 'Nifty LargeMidcap 250 TRI',
    overview: 'Invests a minimum of 35% each in large-cap and mid-cap equities, balancing the stability of established leaders with the growth potential of emerging companies.',
    navHistory: [
      { date: 'Jan 2021', nav: 28.1 }, { date: 'Jan 2022', nav: 35.6 }, { date: 'Jan 2023', nav: 38.9 },
      { date: 'Jan 2024', nav: 49.2 }, { date: 'Jan 2025', nav: 58.7 }, { date: 'Jun 2026', nav: 66.4 },
    ],
    aumHistory: [
      { year: '2021', aum: 3100 }, { year: '2022', aum: 5800 }, { year: '2023', aum: 8400 },
      { year: '2024', aum: 11200 }, { year: '2025', aum: 12900 }, { year: '2026', aum: 14100 },
    ],
    returnsTable: [
      { period: '1 Year', fund: '19.7%', benchmark: '17.2%', category: '16.8%' },
      { period: '3 Years', fund: '17.9%', benchmark: '15.1%', category: '14.6%' },
      { period: '5 Years', fund: '16.8%', benchmark: '13.8%', category: '13.4%' },
      { period: 'Since Inception', fund: '16.5%', benchmark: '13.2%', category: '12.9%' },
    ],
    sectorAllocation: [
      { sector: 'Financial Services', weight: 24.8 },
      { sector: 'Information Technology', weight: 14.5 },
      { sector: 'Industrials', weight: 13.9 },
      { sector: 'Consumer Discretionary', weight: 12.2 },
      { sector: 'Healthcare', weight: 9.7 },
      { sector: 'Materials', weight: 8.4 },
      { sector: 'Others', weight: 16.5 },
    ],
    topHoldings: [
      { name: 'ICICI Bank Ltd', sector: 'Financial Services', weight: 7.1 },
      { name: 'HDFC Bank Ltd', sector: 'Financial Services', weight: 6.4 },
      { name: 'Larsen & Toubro Ltd', sector: 'Industrials', weight: 5.2 },
      { name: 'TVS Motor Company', sector: 'Consumer Discretionary', weight: 4.1 },
      { name: 'Persistent Systems', sector: 'Information Technology', weight: 3.6 },
    ],
    riskMetrics: [
      { label: 'Standard Deviation', value: '15.8%' },
      { label: 'Sharpe Ratio', value: '1.04' },
      { label: 'Beta', value: '0.98' },
      { label: 'Alpha', value: '2.9%' },
      { label: 'Sortino Ratio', value: '1.41' },
      { label: 'Max Drawdown', value: '-22.1%' },
    ],
    documents: [
      { name: 'Scheme Information Document', type: 'PDF', date: 'Updated May 2026' },
      { name: 'Factsheet — May 2026', type: 'PDF', date: '01 Jun 2026' },
      { name: 'Portfolio Disclosure', type: 'XLSX', date: '01 Jun 2026' },
    ],
  },
  'focused-equity': {
    id: 'f-3', slug: 'focused-equity', name: 'HDFC Focused Equity Fund', category: 'Equity — Focused',
    aum: '₹6,830 Cr', expenseRatio: '0.95%', returns1Y: '+24.1%', startDate: '22 Jul 2021', status: 'Active',
    benchmark: 'Nifty 200 TRI',
    overview: 'A high-conviction portfolio of up to 30 stocks, concentrated in the manager\'s highest-confidence ideas across market caps.',
    navHistory: [
      { date: 'Jan 2022', nav: 11.2 }, { date: 'Jan 2023', nav: 12.8 }, { date: 'Jan 2024', nav: 16.9 },
      { date: 'Jan 2025', nav: 21.4 }, { date: 'Jun 2026', nav: 26.6 },
    ],
    aumHistory: [
      { year: '2022', aum: 1400 }, { year: '2023', aum: 2900 }, { year: '2024', aum: 4600 },
      { year: '2025', aum: 5900 }, { year: '2026', aum: 6830 },
    ],
    returnsTable: [
      { period: '1 Year', fund: '24.1%', benchmark: '18.6%', category: '18.0%' },
      { period: '3 Years', fund: '21.2%', benchmark: '16.4%', category: '15.8%' },
      { period: 'Since Inception', fund: '20.6%', benchmark: '15.1%', category: '14.6%' },
    ],
    sectorAllocation: [
      { sector: 'Financial Services', weight: 31.2 },
      { sector: 'Information Technology', weight: 19.4 },
      { sector: 'Consumer Discretionary', weight: 15.8 },
      { sector: 'Healthcare', weight: 11.3 },
      { sector: 'Others', weight: 22.3 },
    ],
    topHoldings: [
      { name: 'HDFC Bank Ltd', sector: 'Financial Services', weight: 9.4 },
      { name: 'Infosys Ltd', sector: 'Information Technology', weight: 7.8 },
      { name: 'Titan Company Ltd', sector: 'Consumer Discretionary', weight: 6.2 },
      { name: 'Sun Pharmaceutical', sector: 'Healthcare', weight: 5.5 },
    ],
    riskMetrics: [
      { label: 'Standard Deviation', value: '16.4%' },
      { label: 'Sharpe Ratio', value: '1.32' },
      { label: 'Beta', value: '0.91' },
      { label: 'Alpha', value: '5.6%' },
      { label: 'Sortino Ratio', value: '1.78' },
      { label: 'Max Drawdown', value: '-17.8%' },
    ],
    documents: [
      { name: 'Scheme Information Document', type: 'PDF', date: 'Updated May 2026' },
      { name: 'Factsheet — May 2026', type: 'PDF', date: '01 Jun 2026' },
    ],
  },
  'business-cycle': {
    id: 'f-4', slug: 'business-cycle', name: 'HDFC Business Cycle Fund', category: 'Equity — Thematic',
    aum: '₹3,500 Cr', expenseRatio: '1.02%', returns1Y: '+17.9%', startDate: '14 Feb 2022', status: 'Active',
    benchmark: 'Nifty 500 TRI',
    overview: 'Rotates exposure across sectors based on the prevailing phase of the economic cycle, increasing weight in cyclicals during expansion and defensives during contraction.',
    navHistory: [
      { date: 'Jan 2023', nav: 10.8 }, { date: 'Jan 2024', nav: 13.9 }, { date: 'Jan 2025', nav: 16.7 }, { date: 'Jun 2026', nav: 19.2 },
    ],
    aumHistory: [
      { year: '2023', aum: 1100 }, { year: '2024', aum: 2000 }, { year: '2025', aum: 2900 }, { year: '2026', aum: 3500 },
    ],
    returnsTable: [
      { period: '1 Year', fund: '17.9%', benchmark: '18.1%', category: '16.4%' },
      { period: 'Since Inception', fund: '17.1%', benchmark: '16.2%', category: '15.0%' },
    ],
    sectorAllocation: [
      { sector: 'Industrials', weight: 22.6 },
      { sector: 'Financial Services', weight: 21.1 },
      { sector: 'Materials', weight: 16.4 },
      { sector: 'Energy', weight: 12.8 },
      { sector: 'Others', weight: 27.1 },
    ],
    topHoldings: [
      { name: 'Larsen & Toubro Ltd', sector: 'Industrials', weight: 6.8 },
      { name: 'ICICI Bank Ltd', sector: 'Financial Services', weight: 5.9 },
      { name: 'UltraTech Cement', sector: 'Materials', weight: 4.7 },
    ],
    riskMetrics: [
      { label: 'Standard Deviation', value: '17.9%' },
      { label: 'Sharpe Ratio', value: '0.96' },
      { label: 'Beta', value: '1.06' },
      { label: 'Alpha', value: '1.4%' },
      { label: 'Sortino Ratio', value: '1.22' },
      { label: 'Max Drawdown', value: '-24.6%' },
    ],
    documents: [
      { name: 'Scheme Information Document', type: 'PDF', date: 'Updated May 2026' },
      { name: 'Factsheet — May 2026', type: 'PDF', date: '01 Jun 2026' },
    ],
  },
}
