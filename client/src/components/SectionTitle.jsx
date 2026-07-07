import styles from './SectionTitle.module.css'

export default function SectionTitle({
  subtitle,
  children,
  align = 'center',
  light = false,
}) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={`${styles.title} ${light ? styles.light : ''}`}>
        {children}
      </h2>
    </div>
  )
}
