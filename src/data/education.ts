export interface Education {
  id: string
  institution: string
  degree: string
  year: string
}

export const education: Education[] = [
  { id: 'edu-1', institution: 'CFA Institute, USA', degree: 'Chartered Financial Analyst (CFA)', year: 'Confirmed' },
  { id: 'edu-2', institution: 'Institute of Chartered Accountants of India (ICAI)', degree: 'Chartered Accountant (CA)', year: 'Confirmed' },
  { id: 'edu-3', institution: 'University of Mumbai', degree: 'Master of Commerce (M.Com)', year: 'Confirmed' },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  issueDate: string
}

export const certifications: Certification[] = [
  { id: 'cert-1', name: 'CFA', issuer: 'CFA Institute', issueDate: 'Verified' },
  { id: 'cert-2', name: 'CA', issuer: 'ICAI', issueDate: 'Verified' },
  { id: 'cert-3', name: 'M.Com', issuer: 'University of Mumbai', issueDate: 'Verified' },
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
