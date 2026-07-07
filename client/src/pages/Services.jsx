import { Link } from 'react-router-dom'
import { IconArrowRight, IconPlane, IconShip, IconBuildingWarehouse, IconBriefcase } from '@tabler/icons-react'
import GlassCard from '../components/GlassCard'
import TiltCard from '../components/TiltCard'
import ParallaxSection from '../components/ParallaxSection'
import ScrollReveal from '../components/ScrollReveal'
import SectionTitle from '../components/SectionTitle'
import ThreeBackground from '../components/ThreeBackground'
import styles from './Services.module.css'

const services = [
  {
    icon: <IconPlane size={36} />,
    title: 'Air Freight',
    subtitle: 'Time-critical · Express · Charter',
    desc: 'Priority boarding at 200+ airports globally. Real-time uplift confirmation, temperature-controlled cargo, and dangerous goods handling. Our AI routing engine finds the fastest path through commercial and charter networks.',
    highlights: ['Same-day uplift available', 'GDP/CEIV Pharma certified', 'Real-time flight tracking'],
    featured: true,
  },
  {
    icon: <IconShip size={36} />,
    title: 'Ocean Freight',
    subtitle: 'FCL · LCL · Breakbulk · RoRo',
    desc: 'Full-container and less-than-container load with automated bill-of-lading. Port-to-port or door-to-door with drayage, chassis, and transload coordination across 500+ port pairs.',
    highlights: ['FCL 20′/40′ standard & HC', 'LCL consolidation hubs', 'Automated ISF filings'],
    featured: false,
  },
  {
    icon: <IconBuildingWarehouse size={36} />,
    title: 'Contract Logistics',
    subtitle: 'Warehousing · Fulfillment · Cross-Dock',
    desc: '50M+ sq ft of shared and dedicated space across strategic nodes. WMS-integrated pick-pack-ship, kitting, reverse logistics, and omni-channel fulfillment for B2B and DTC operations.',
    highlights: ['Real-time inventory visibility', 'E-commerce integration APIs', 'Scalable labor-on-demand'],
    featured: false,
  },
  {
    icon: <IconBriefcase size={36} />,
    title: 'Customs Brokerage',
    subtitle: 'Compliance · Classification · Duty',
    desc: 'Licensed customs brokers in 40+ trade zones handling ITB, ISF, entry summaries, and duty drawback. ACE-certified with automated document generation and HS code classification.',
    highlights: ['Pre-clearance & post-entry', 'Duty drawback & deferral', 'FDA/USDA/TPP filings'],
    featured: false,
  },
]

const SERVICES_BG = 'https://images.unsplash.com/photo-1586528116493-da0a18b2d32f?w=1600&q=80'

export default function Services() {
  return (
    <>
      <section className={styles.hero}>
        <ThreeBackground />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionTitle subtitle="Our Services" align="left">
            End-to-end freight solutions engineered for precision
          </SectionTitle>
          <ScrollReveal>
            <p className={styles.heroDesc}>
              From a single pallet to a global supply chain overhaul. Every service
              is backed by live tracking, automated documentation, and a dedicated
              operations lead.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((s, i) => (
              <ScrollReveal key={i} index={i}>
                <TiltCard maxTilt={4} glare={true}>
                  <GlassCard
                    className={`${styles.card} ${s.featured ? styles.featured : ''}`}
                    hover={false}
                    glow={s.featured}
                  >
                    <div className={styles.cardIcon}>{s.icon}</div>
                    <div className={styles.cardBody}>
                      <span className={styles.cardSubtitle}>{s.subtitle}</span>
                      <h3 className={styles.cardTitle}>{s.title}</h3>
                      <p className={styles.cardDesc}>{s.desc}</p>
                      <ul className={styles.cardHighlights}>
                        {s.highlights.map((h, j) => (
                          <li key={j}>{h}</li>
                        ))}
                      </ul>
                      <Link to="/contact" className={styles.cardLink}>
                        Request a quote <IconArrowRight size={14} />
                      </Link>
                    </div>
                  </GlassCard>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection src={SERVICES_BG} height="40vh" speed={0.3}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-sub)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-primary)', marginBottom: 12 }}>
              Not sure which service fits your load?
            </h2>
            <p style={{ color: 'rgba(240,244,255,0.8)', fontSize: '1rem', marginBottom: 24 }}>
              Tell us what you're shipping and we'll handle the rest.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a free consultation <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </ParallaxSection>
    </>
  )
}
