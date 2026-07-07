import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  IconPackage,
  IconTruck,
  IconPlane,
  IconMapPin,
  IconCheck,
  IconClock,
} from '@tabler/icons-react'
import GlassCard from '../components/GlassCard'
import TiltCard from '../components/TiltCard'
import TrackInput from '../components/TrackInput'
import SectionTitle from '../components/SectionTitle'
import ThreeBackground from '../components/ThreeBackground'
import styles from './Tracking.module.css'

const MOCK_SHIPMENT = {
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
}

const statusIcons = {
  'Order Placed': <IconPackage size={18} />,
  'Container Packed': <IconPackage size={18} />,
  'Departed Shanghai': <IconPlane size={18} />,
  'In Transit': <IconTruck size={18} />,
  'Arrived at Port': <IconMapPin size={18} />,
  'Out for Delivery': <IconTruck size={18} />,
  'Delivered': <IconCheck size={18} />,
}

export default function Tracking() {
  const [searchParams] = useSearchParams()
  const [shipment, setShipment] = useState(null)
  const [loading, setLoading] = useState(false)

  const queryId = searchParams.get('id')

  useEffect(() => {
    if (queryId) {
      setLoading(true)
      const timer = setTimeout(() => {
        setShipment(MOCK_SHIPMENT)
        setLoading(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [queryId])

  const doneCount = shipment
    ? shipment.timeline.filter((t) => t.done).length
    : 0
  const progress = shipment
    ? (doneCount / shipment.timeline.length) * 100
    : 0

  return (
    <>
      <section className={styles.hero}>
        <ThreeBackground />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionTitle subtitle="Live Tracking">
            Track your shipment in real time
          </SectionTitle>
          <div className={styles.inputCenter}>
            <TrackInput />
          </div>
          {!queryId && !shipment && (
            <p className={styles.hint}>
              Enter a tracking number above, or try{' '}
              <strong onClick={() => window.history.replaceState(null, '', '?id=NR-2847-USA-DE')}>
                NR-2847-USA-DE
              </strong>
            </p>
          )}
        </div>
      </section>

      {loading && (
        <section>
          <div className="container">
            <div className={styles.loadingBar} />
          </div>
        </section>
      )}

      {shipment && !loading && (
        <section className={styles.resultSection}>
          <div className="container">
            <div className={styles.resultGrid}>
              <div className={styles.timelineCol}>
                <TiltCard maxTilt={3} glare={false}>
                  <GlassCard className={styles.timelineCard} hover={false}>
                    <h3 className={styles.timelineTitle}>Shipment Progress</h3>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className={styles.timeline}>
                      {shipment.timeline.map((t, i) => (
                        <motion.div
                          key={i}
                          className={`${styles.step} ${t.done ? styles.done : ''} ${t.active ? styles.active : ''}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className={styles.stepDot}>
                            {t.done ? (
                              <IconCheck size={14} />
                            ) : (
                              statusIcons[t.label] || <IconClock size={14} />
                            )}
                          </div>
                          <div className={styles.stepContent}>
                            <span className={styles.stepLabel}>{t.label}</span>
                            <span className={styles.stepMeta}>
                              {t.date} · {t.time}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </TiltCard>
              </div>

              <div className={styles.infoCol}>
                <TiltCard maxTilt={3} glare={false}>
                  <GlassCard className={styles.infoCard} hover={false}>
                    <h3 className={styles.infoTitle}>Shipment Details</h3>
                    <div className={styles.infoRows}>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Tracking ID</span>
                        <span className={styles.infoValue}>{shipment.id}</span>
                      </div>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Status</span>
                        <span className={styles.statusBadge}>In Transit</span>
                      </div>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Origin</span>
                        <span className={styles.infoValue}>{shipment.origin}</span>
                      </div>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Destination</span>
                        <span className={styles.infoValue}>{shipment.destination}</span>
                      </div>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Est. Delivery</span>
                        <span className={styles.infoValue}>{shipment.estimatedDelivery}</span>
                      </div>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Weight</span>
                        <span className={styles.infoValue}>{shipment.weight}</span>
                      </div>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Mode</span>
                        <span className={styles.infoValue}>{shipment.mode}</span>
                      </div>
                      <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Container</span>
                        <span className={styles.infoValue}>{shipment.container}</span>
                      </div>
                    </div>
                  </GlassCard>
                </TiltCard>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
