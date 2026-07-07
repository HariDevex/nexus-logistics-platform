import express from 'express'
import cors from 'cors'
import { apiRouter } from './routes/api.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use('/api', apiRouter)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'NodeRoute API' })
})

app.listen(PORT, () => {
  console.log(`⚡ NodeRoute API running on port ${PORT}`)
})
