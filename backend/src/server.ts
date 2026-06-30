import express from 'express'
import cors from 'cors'
import managerRoutes from './routes/manager.routes'
import fundRoutes from './routes/fund.routes'

const app = express()
app.use(cors())
app.use(express.json())

// Placeholder routes only — no business logic implemented yet.
// The frontend currently consumes hardcoded data in src/data/*.ts.
// These endpoints define the future contract so the UI layer
// never needs to change when real implementations are added.
app.use('/api/managers', managerRoutes)
app.use('/api/funds', fundRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'fund-dashboard-backend' })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Backend placeholder running on port ${PORT}`)
})
