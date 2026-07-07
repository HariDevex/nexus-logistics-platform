import { useState } from 'react'
import { IconMapPin, IconPhone, IconMail, IconClock, IconArrowRight } from '@tabler/icons-react'
import GlassCard from '../components/GlassCard'
import TiltCard from '../components/TiltCard'
import ParallaxSection from '../components/ParallaxSection'
import ScrollReveal from '../components/ScrollReveal'
import SectionTitle from '../components/SectionTitle'
import ThreeBackground from '../components/ThreeBackground'
import styles from './Contact.module.css'

const freightTypes = [
  'LTL — Less Than Truckload',
  'FTL — Full Truckload',
  'Ocean FCL',
  'Ocean LCL',
  'Air Freight Express',
  'Air Freight Economy',
  'Contract Logistics',
  'Customs Brokerage Only',
]

const offices = [
  {
    city: 'Charlotte, NC',
    address: '300 S Tryon St, Suite 1400',
    phone: '+1 (555) 000-0000',
    email: 'clt@noderoute.io',
  },
  {
    city: 'Rotterdam, NL',
    address: 'Waalhaven Oostzijde 82',
    phone: '+31 (0) 10 200 0000',
    email: 'rtm@noderoute.io',
  },
  {
    city: 'Singapore, SG',
    address: '1 Raffles Place, #20-01',
    phone: '+65 6000 0000',
    email: 'sin@noderoute.io',
  },
]

const CONTACT_BG = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    weight: '',
    freightType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {}
    setSending(false)
    setSubmitted(true)
  }

  return (
    <>
      <section className={styles.hero}>
        <ThreeBackground />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionTitle subtitle="Request a Quote" align="left">
            Tell us what you're shipping
          </SectionTitle>
          <ScrollReveal>
            <p className={styles.heroDesc}>
              Fill out the form and we'll get back to you with a competitive
              rate within 2 hours during business hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.grid}>
            <ScrollReveal>
              <TiltCard maxTilt={2} glare={false}>
                <GlassCard className={styles.formCard} hover={false}>
                  {submitted ? (
                    <div className={styles.success}>
                      <div className={styles.successIcon}>
                        <IconArrowRight size={32} />
                      </div>
                      <h3 className={styles.successTitle}>Quote requested</h3>
                      <p className={styles.successDesc}>
                        We'll review your details and reach out within 2 hours.
                        Your reference ID will be sent to your email.
                      </p>
                      <button
                        className="btn-primary"
                        onClick={() => {
                          setSubmitted(false)
                          setForm({
                            name: '', email: '', phone: '',
                            origin: '', destination: '', weight: '',
                            freightType: '', message: '',
                          })
                        }}
                      >
                        Submit another
                      </button>
                    </div>
                  ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label className={styles.label}>Full Name</label>
                          <input
                            className={styles.input}
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Carter"
                          />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label}>Email</label>
                          <input
                            className={styles.input}
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@shipper.com"
                          />
                        </div>
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label className={styles.label}>Phone</label>
                          <input
                            className={styles.input}
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label}>Freight Type</label>
                          <select
                            className={styles.select}
                            name="freightType"
                            required
                            value={form.freightType}
                            onChange={handleChange}
                          >
                            <option value="">Select type...</option>
                            {freightTypes.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.field}>
                          <label className={styles.label}>Origin</label>
                          <input
                            className={styles.input}
                            type="text"
                            name="origin"
                            required
                            value={form.origin}
                            onChange={handleChange}
                            placeholder="City, Country"
                          />
                        </div>
                        <div className={styles.field}>
                          <label className={styles.label}>Destination</label>
                          <input
                            className={styles.input}
                            type="text"
                            name="destination"
                            required
                            value={form.destination}
                            onChange={handleChange}
                            placeholder="City, Country"
                          />
                        </div>
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>
                          Approximate Weight
                        </label>
                        <input
                          className={styles.input}
                          type="text"
                          name="weight"
                          required
                          value={form.weight}
                          onChange={handleChange}
                          placeholder="e.g. 500 kg or 2 pallets"
                        />
                      </div>
                      <div className={styles.field}>
                        <label className={styles.label}>
                          Additional Details
                        </label>
                        <textarea
                          className={styles.textarea}
                          name="message"
                          rows={3}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Commodity type, special handling, incoterms..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={sending}
                      >
                        {sending ? 'Sending...' : 'Request Quote'}
                        <IconArrowRight size={18} />
                      </button>
                    </form>
                  )}
                </GlassCard>
              </TiltCard>
            </ScrollReveal>

            <div className={styles.infoCol}>
              <ScrollReveal index={1}>
                <TiltCard maxTilt={3} glare={false}>
                  <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>Contact Details</h3>
                    <div className={styles.infoItems}>
                      <div className={styles.infoItem}>
                        <IconMail size={18} />
                        <span>contact@noderoute.io</span>
                      </div>
                      <div className={styles.infoItem}>
                        <IconPhone size={18} />
                        <span>+1 (555) 000-0000</span>
                      </div>
                      <div className={styles.infoItem}>
                        <IconClock size={18} />
                        <span>Mon–Fri, 7 AM – 7 PM EST</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>

              <ScrollReveal index={2}>
                <TiltCard maxTilt={3} glare={false}>
                  <div className={styles.infoCard}>
                    <h3 className={styles.infoTitle}>Global Offices</h3>
                    <div className={styles.offices}>
                      {offices.map((o, i) => (
                        <div key={i} className={styles.office}>
                          <div className={styles.officeHeader}>
                            <IconMapPin size={16} />
                            <span className={styles.officeCity}>{o.city}</span>
                          </div>
                          <p className={styles.officeDetail}>{o.address}</p>
                          <p className={styles.officeDetail}>{o.phone}</p>
                          <p className={styles.officeDetail}>{o.email}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection src={CONTACT_BG} height="40vh" speed={0.25} />

      <section className={styles.responseSection}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className={styles.responseTitle}>We respond within 2 hours</h2>
            <p className={styles.responseDesc}>
              Monday – Friday, 7 AM – 7 PM EST. Emergency after-hours support
              available for active shipments.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
