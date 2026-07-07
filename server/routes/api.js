import { Router } from 'express'

export const apiRouter = Router()

const MOCK_TRACKING = {
  'NR-2847-USA-DE': {
    id: 'NR-2847-USA-DE',
    status: 'in_transit',
    origin: 'Shanghai, CN',
    destination: 'Charlotte, NC, US',
    estimatedDelivery: 'Jul 14, 2026',
    weight: '4,250 kg',
    mode: 'Ocean FCL',
    container: 'MSKU 429817-2',
    timeline: [
      { label: 'Order Placed', date: 'Jun 28', time: '09:14 UTC', done: true },
      { label: 'Container Packed', date: 'Jun 30', time: '16:42 UTC', done: true },
      { label: 'Departed Shanghai', date: 'Jul 2', time: '03:00 UTC', done: true },
      { label: 'In Transit', date: 'Jul 4', time: '11:30 UTC', done: true, active: true },
      { label: 'Arrived at Port', date: 'Jul 12', time: 'ETA', done: false },
      { label: 'Out for Delivery', date: 'Jul 14', time: 'ETA', done: false },
      { label: 'Delivered', date: 'Jul 14', time: 'ETA', done: false },
    ],
  },
  'NR-9921-JPN-US': {
    id: 'NR-9921-JPN-US',
    status: 'customs_hold',
    origin: 'Tokyo, JP',
    destination: 'Los Angeles, CA, US',
    estimatedDelivery: 'Jul 16, 2026',
    weight: '840 kg',
    mode: 'Air Freight Express',
    container: 'AWB 123-4567 8901',
    timeline: [
      { label: 'Order Placed', date: 'Jul 1', time: '08:30 UTC', done: true },
      { label: 'Departed Tokyo', date: 'Jul 3', time: '22:00 UTC', done: true },
      { label: 'Arrived LAX', date: 'Jul 4', time: '06:15 UTC', done: true },
      { label: 'Customs Hold', date: 'Jul 4', time: '09:00 UTC', done: true, active: true },
      { label: 'Cleared Customs', date: 'Jul 15', time: 'ETA', done: false },
      { label: 'Out for Delivery', date: 'Jul 15', time: 'ETA', done: false },
      { label: 'Delivered', date: 'Jul 16', time: 'ETA', done: false },
    ],
  },
}

apiRouter.get('/tracking/:id', (req, res) => {
  const { id } = req.params
  const shipment = MOCK_TRACKING[id]

  if (!shipment) {
    return res.status(404).json({
      error: 'Shipment not found',
      message: `No shipment found with tracking ID "${id}". Please verify and try again.`,
    })
  }

  res.json({ shipment })
})

apiRouter.post('/quote', (req, res) => {
  const { name, email, origin, destination, weight, freightType } = req.body

  if (!name || !email || !origin || !destination || !weight || !freightType) {
    return res.status(400).json({
      error: 'Missing required fields',
      message: 'Please fill in all required fields.',
    })
  }

  const quoteRef = `Q-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`

  res.json({
    success: true,
    quoteRef,
    message: `Quote request received. Reference: ${quoteRef}. We'll respond within 2 hours.`,
    estimatedRate: {
      currency: 'USD',
      range: { low: 1200, high: 1800 },
      note: 'Rough estimate — final rate may vary by incoterm, accessorials, and current capacity.',
    },
  })
})

apiRouter.post('/contact', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields',
    })
  }

  res.json({
    success: true,
    message: 'Message received. We will get back to you shortly.',
  })
})
