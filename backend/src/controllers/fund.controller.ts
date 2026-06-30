import { Request, Response } from 'express'

// TODO: replace with real database/service calls.
export function listFunds(_req: Request, res: Response) {
  res.status(501).json({ message: 'Not implemented — placeholder endpoint' })
}

export function getFundDetails(_req: Request, res: Response) {
  res.status(501).json({ message: 'Not implemented — placeholder endpoint' })
}
