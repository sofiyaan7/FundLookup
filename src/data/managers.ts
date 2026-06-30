export interface ManagerListItem {
  id: string
  name: string
  designation: string
  amc: string
  aum: string
  experience: string
  cagr: string
}

export const managersList: ManagerListItem[] = [
  { id: 'mgr-001', name: 'Rajiv Mehta', designation: 'Senior Fund Manager — Equity', amc: 'HDFC Mutual Fund', aum: '₹42,850 Cr', experience: '17 yrs', cagr: '16.8%' },
  { id: 'mgr-002', name: 'Ananya Krishnan', designation: 'Head of Fixed Income', amc: 'SBI Mutual Fund', aum: '₹38,200 Cr', experience: '14 yrs', cagr: '8.4%' },
  { id: 'mgr-003', name: 'Vikram Suri', designation: 'Fund Manager — Smallcap', amc: 'Nippon India MF', aum: '₹21,600 Cr', experience: '11 yrs', cagr: '21.2%' },
  { id: 'mgr-004', name: 'Priya Nair', designation: 'Chief Investment Officer', amc: 'Kotak Mutual Fund', aum: '₹56,900 Cr', experience: '19 yrs', cagr: '15.1%' },
  { id: 'mgr-005', name: 'Arjun Bose', designation: 'Fund Manager — Hybrid', amc: 'ICICI Prudential', aum: '₹29,400 Cr', experience: '9 yrs', cagr: '12.6%' },
]
