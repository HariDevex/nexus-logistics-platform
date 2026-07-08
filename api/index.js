import express from 'express'
import cors from 'cors'
import { apiRouter } from '../server/routes/api.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'NodeRoute API' })
})

export default app
