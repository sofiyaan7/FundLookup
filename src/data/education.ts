export interface Education {
  id: string
  institution: string
  degree: string
  year: string
}

export const education: Education[] = [
  { id: 'edu-1', institution: 'CFA Institute, USA', degree: 'Chartered Financial Analyst (CFA)', year: '2016' },
  { id: 'edu-2', institution: 'Institute of Chartered Accountants of India (ICAI)', degree: 'Chartered Accountant (CA)', year: '2012' },
  { id: 'edu-3', institution: 'University of Mumbai', degree: 'Master of Commerce (M.Com)', year: '2008' },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
}

export const certifications: Certification[] = [
  { id: 'cert-1', name: 'CFA', issuer: 'CFA Institute', issueDate: '2016' },
  { id: 'cert-2', name: 'CA', issuer: 'ICAI', issueDate: '2012' },
  { id: 'cert-3', name: 'M.Com', issuer: 'University of Mumbai', issueDate: '2008' },
]

export interface Award {
  id: string
  title: string
  organization: string
  year: string
  description: string
}

export const awards: Award[] = [
  { id: 'awd-1', title: 'CFA Charterholder', organization: 'CFA Institute', year: 'Present', description: 'Member of the professional body supporting investment ethics and standards.' },
  { id: 'awd-2', title: 'CA Membership', organization: 'ICAI', year: 'Present', description: 'Professional member of the apex accounting and finance body in India.' },
  { id: 'awd-3', title: 'Equity Research Leadership', organization: 'HDFC AMC', year: '2020–Present', description: 'Leading equity portfolio management and research oversight for long-term wealth creation.' },
]
