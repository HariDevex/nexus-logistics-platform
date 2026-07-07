import styles from './GlassCard.module.css'

export default function GlassCard({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <div
      className={`${styles.card} ${hover ? styles.cardHover : ''} ${glow ? styles.cardGlow : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
