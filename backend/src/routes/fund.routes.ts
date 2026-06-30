import { Router } from 'express'
import { getFundDetails, listFunds } from '../controllers/fund.controller'

const router = Router()

// GET /api/funds — list all funds
router.get('/', listFunds)

// GET /api/funds/:slug — get a single fund's detail
router.get('/:slug', getFundDetails)

export default router
