import GlassCard from './GlassCard'
import styles from './StatsBar.module.css'

const stats = [
  { value: '12M+', label: 'Shipments Delivered' },
  { value: '99.8%', label: 'On-Time Rate' },
  { value: '190+', label: 'Countries Served' },
]

export default function StatsBar({ className = '' }) {
  return (
    <div className={`${styles.bar} ${className}`}>
      {stats.map((s, i) => (
        <GlassCard key={i} className={styles.card}>
          <span className={styles.value}>{s.value}</span>
          <span className={styles.label}>{s.label}</span>
        </GlassCard>
      ))}
    </div>
  )
}
