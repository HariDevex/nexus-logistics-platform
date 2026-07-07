import { Link } from 'react-router-dom'
import { IconBrandX, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon} />
              NodeRoute
            </div>
            <p className={styles.tagline}>
              Global freight intelligence. Precision logistics powered by real-time
              data and decades of industry expertise.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="X"><IconBrandX size={18} /></a>
              <a href="#" aria-label="LinkedIn"><IconBrandLinkedin size={18} /></a>
              <a href="#" aria-label="GitHub"><IconBrandGithub size={18} /></a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Services</h4>
              <Link to="/services" className={styles.colLink}>Air Freight</Link>
              <Link to="/services" className={styles.colLink}>Ocean Freight</Link>
              <Link to="/services" className={styles.colLink}>Contract Logistics</Link>
              <Link to="/services" className={styles.colLink}>Customs Brokerage</Link>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
              <Link to="/about" className={styles.colLink}>About Us</Link>
              <Link to="/tracking" className={styles.colLink}>Tracking</Link>
              <Link to="/contact" className={styles.colLink}>Contact</Link>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Contact</h4>
              <p className={styles.colText}>contact@noderoute.io</p>
              <p className={styles.colText}>+1 (555) 000-0000</p>
              <p className={styles.colText}>
                300 S Tryon St, Charlotte, NC 28202
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} NodeRoute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
