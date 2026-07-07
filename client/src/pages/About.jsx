import { IconNetwork, IconLeaf, IconShieldCheck, IconWorld } from '@tabler/icons-react'
import GlassCard from '../components/GlassCard'
import TiltCard from '../components/TiltCard'
import ParallaxSection from '../components/ParallaxSection'
import ScrollReveal from '../components/ScrollReveal'
import SectionTitle from '../components/SectionTitle'
import ThreeBackground from '../components/ThreeBackground'
import styles from './About.module.css'

const metrics = [
  { value: '40+', label: 'Years Combined Exp.' },
  { value: '50M', label: 'Square Feet Warehouse' },
  { value: '12K+', label: 'Containers Managed / Mo.' },
  { value: '99.6%', label: 'Customs Clearance Rate' },
]

const pillars = [
  {
    icon: <IconNetwork size={28} />,
    title: 'Global Network',
    desc: 'Owned and partner hubs across North America, Europe, and APAC. Full intermodal coverage with real-time node routing.',
  },
  {
    icon: <IconLeaf size={28} />,
    title: 'Sustainability',
    desc: 'Carbon-neutral LTL by 2027. Modal shift programs, biofuel partnerships, and real-time emissions reporting per shipment.',
  },
  {
    icon: <IconShieldCheck size={28} />,
    title: 'Security & Compliance',
    desc: 'C-TPAT, TSA, and AEO certified. End-to-end encrypted data pipelines and blockchain-audited chain of custody.',
  },
  {
    icon: <IconWorld size={28} />,
    title: 'Technology Advantage',
    desc: 'Proprietary TMS with AI-driven rate optimization, predictive ETAs, and live visibility across all transport modes.',
  },
]

const ABOUT_BG = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80'

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <ThreeBackground />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <SectionTitle subtitle="About NodeRoute" align="left">
              Built for freight that can't afford to wait
            </SectionTitle>
          </ScrollReveal>
          <div className={styles.heroGrid}>
            <ScrollReveal index={0}>
              <p className={styles.heroText}>
                NodeRoute was founded by freight veterans and software engineers who
                believed the industry deserved better than phone tag and spreadsheets.
                We've built a global logistics network that treats every shipment as a
                data problem — optimizing routes, consolidating loads, and delivering
                real-time visibility to every stakeholder.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p className={styles.heroText}>
                Our platform powers LTL, FTL, ocean, and air freight across 190+
                countries. We handle the customs clearance, drayage, and final-mile
                delivery so you can focus on what matters.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={styles.metricsSection}>
        <div className="container">
          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <ScrollReveal key={i} index={i}>
                <TiltCard maxTilt={4} glare={false}>
                  <div className={styles.metricCard}>
                    <span className={styles.metricValue}>{m.value}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className="container">
          <SectionTitle subtitle="What Sets Us Apart">The NodeRoute advantage</SectionTitle>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <ScrollReveal key={i} index={i}>
                <TiltCard maxTilt={5} glare={true}>
                  <GlassCard className={styles.pillarCard} hover={false}>
                    <div className={styles.pillarIcon}>{p.icon}</div>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </GlassCard>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection src={ABOUT_BG} height="50vh" speed={0.25}>
        <div className="container">
          <div className={styles.techContent}>
            <span className={styles.techTag}>Platform</span>
            <h2 className={styles.techTitle}>
              One API to ship anything, anywhere
            </h2>
            <p className={styles.techText}>
              Our TMS integrates with your existing ERP, WMS, or e-commerce
              platform via REST API. Rate shopping, label generation, document
              management, and live tracking — all in one dashboard.
            </p>
          </div>
        </div>
      </ParallaxSection>

      <section className={styles.listSection}>
        <div className="container">
          <div className={styles.listGrid}>
            {[
              'Multi-carrier rate comparison in real time',
              'Automated bill-of-lading and commercial invoices',
              'Customs document generation with HS code lookup',
              'Webhook-based status updates for your systems',
            ].map((item, i) => (
              <ScrollReveal key={i} index={i}>
                <TiltCard maxTilt={3} glare={false}>
                  <div className={styles.listCard}>
                    <div className={styles.listDot} />
                    <span>{item}</span>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
