import { Router } from 'express'
import { getManagerProfile, listManagers } from '../controllers/manager.controller'

const router = Router()

// GET /api/managers — list all managers
router.get('/', listManagers)

// GET /api/managers/:id — get a single manager profile
router.get('/:id', getManagerProfile)

export default router
