export interface Education {
  id: string
  institution: string
  degree: string
  year: string
}

export const education: Education[] = [
  { id: 'edu-1', institution: 'CFA Institute', degree: 'Chartered Financial Analyst (CFA)', year: '2011' },
  { id: 'edu-2', institution: 'IIM Ahmedabad', degree: 'MBA — Finance', year: '2009' },
  { id: 'edu-3', institution: 'IIT Bombay', degree: 'B.Tech — Mechanical Engineering', year: '2007' },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
}

export const certifications: Certification[] = [
  { id: 'cert-1', name: 'Chartered Financial Analyst (CFA)', issuer: 'CFA Institute', issueDate: 'Jun 2011' },
  { id: 'cert-2', name: 'Financial Risk Manager (FRM)', issuer: 'GARP', issueDate: 'Nov 2012' },
  { id: 'cert-3', name: 'NISM Series V-A — Mutual Fund Distributors', issuer: 'NISM', issueDate: 'Jan 2013' },
  { id: 'cert-4', name: 'Certified Market Professional', issuer: 'NSE Academy', issueDate: 'Mar 2010' },
]

export interface Award {
  id: string
  title: string
  organization: string
  year: string
  description: string
}

export const awards: Award[] = [
  { id: 'awd-1', title: 'Rising Fund Manager of the Year', organization: 'Outlook Money', year: '2019', description: 'Recognized for scaling the India Business Cycle Fund to ₹3,200 Cr in under 3 years.' },
  { id: 'awd-2', title: 'Top-Rated BFSI Analyst', organization: 'Asiamoney Brokers Poll', year: '2011', description: 'Ranked #1 among institutional BFSI sector analysts.' },
  { id: 'awd-3', title: 'CFA Charterholder Member', organization: 'CFA Society India', year: '2011–Present', description: 'Active member of the professional body governing investment ethics and standards.' },
]
