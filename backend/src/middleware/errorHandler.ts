import { NextFunction, Request, Response } from 'express'

// Placeholder global error handler — expand with logging/reporting later.
export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  console.error(err)
  res.status(500).json({ message: 'Internal server error' })
}
