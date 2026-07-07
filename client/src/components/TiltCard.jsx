import { useRef, useState, useCallback } from 'react'
import styles from './TiltCard.module.css'

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  perspective = 800,
  glare = true,
  ...props
}) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const tiltX = (y - 0.5) * maxTilt
    const tiltY = (x - 0.5) * -maxTilt

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`,
      transition: 'transform 0.06s linear',
    })

    setGlarePos({ x: x * 100, y: y * 100 })
  }, [maxTilt, perspective])

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`,
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    })
  }, [perspective])

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      {...props}
    >
      {children}
      {glare && (
        <div
          className={styles.glare}
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(127,205,255,0.08), transparent 60%)`,
          }}
        />
      )}
    </div>
  )
}
