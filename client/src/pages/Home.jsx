import { Link } from 'react-router-dom'
import { IconArrowRight, IconSpeedboat, IconShieldLock, IconGlobe } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import ThreeBackground from '../components/ThreeBackground'
import TrackInput from '../components/TrackInput'
import StatsBar from '../components/StatsBar'
import GlassCard from '../components/GlassCard'
import TiltCard from '../components/TiltCard'
import ParallaxSection from '../components/ParallaxSection'
import ScrollReveal from '../components/ScrollReveal'
import styles from './Home.module.css'

const features = [
  {
    icon: <IconSpeedboat size={32} />,
    title: 'Speed',
    desc: 'Time-definite deliveries with dynamic node routing. Our AI-optimized network cuts transit times by up to 30%.',
  },
  {
    icon: <IconShieldLock size={32} />,
    title: 'Security',
    desc: 'End-to-end chain of custody with real-time surveillance, tamper-evident seals, and encrypted shipment data.',
  },
  {
    icon: <IconGlobe size={32} />,
    title: 'Global Reach',
    desc: '190+ countries via interline partnerships and owned hubs. Full drayage and customs brokerage included.',
  },
]

const services = [
  { name: 'Air Freight', desc: 'Time-critical LTL and FTL air solutions with priority boarding and real-time ETA updates.' },
  { name: 'Ocean Freight', desc: 'FCL and LCL container shipping with automated bill-of-lading and port-to-port tracking.' },
  { name: 'Contract Logistics', desc: 'Warehousing, cross-docking, and omni-channel fulfillment with WMS integration.' },
  { name: 'Customs Brokerage', desc: 'ITB, ISF, and duty drawback filings. Licensed brokers in 40+ trade zones.' },
]

const HERO_BG = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80'
const CTA_BG = 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600&q=80'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <ThreeBackground />
        <div className={styles.heroBg}>
          <img src={HERO_BG} alt="" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <motion.span
            className={styles.heroTag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Global Freight Intelligence
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Ship with{' '}
            <span className={styles.heroHighlight}>certainty</span>
            <br />
            Not just visibility
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            NodeRoute combines real-time tracking, AI route optimization, and
            a global network of vetted carriers to move your freight with
            surgical precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <TrackInput />
          </motion.div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <StatsBar />
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.featuresGrid}>
              {features.map((f, i) => (
                <TiltCard key={i} maxTilt={6} glare={true}>
                  <GlassCard className={styles.featureCard} hover={false}>
                    <div className={styles.featureIcon}>{f.icon}</div>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </GlassCard>
                </TiltCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.servicesHeader}>
              <span className={styles.servicesTag}>Full-Service Freight</span>
              <h2 className={styles.servicesTitle}>Everything under one node</h2>
              <p className={styles.servicesDesc}>
                From LTL parcel to FTL full truckload. We handle the complexity,
                you handle your business.
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <ScrollReveal key={i} index={i}>
                <TiltCard maxTilt={5} glare={true}>
                  <GlassCard className={styles.serviceCard} hover={false}>
                    <span className={styles.serviceNum}>0{i + 1}</span>
                    <h3 className={styles.serviceName}>{s.name}</h3>
                    <p className={styles.serviceDesc}>{s.desc}</p>
                    <Link to="/services" className={styles.serviceLink}>
                      Learn more <IconArrowRight size={14} />
                    </Link>
                  </GlassCard>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection src={CTA_BG} height="50vh" speed={0.3}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to move?</h2>
              <p className={styles.ctaDesc}>
                Get a freight quote in under two minutes. No account required.
              </p>
              <Link to="/contact" className="btn-primary">
                Request a Quote <IconArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </>
  )
}
