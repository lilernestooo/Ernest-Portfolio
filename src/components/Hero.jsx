import profileLight from '../assets/profile-light.png'
import profileDark from '../assets/profile-dark.png'
import { MapPin, Phone, Mail } from 'lucide-react'
import { data } from '../data.js'
import styles from './Hero.module.css'

export default function Hero({ theme }) {
  const isDark = theme === 'dark'
  const photo = isDark ? profileDark : profileLight

  return (
    <section className={styles.hero} id="about">
      <div className={`container ${styles.inner}`}>

          {/* Top row: photo + info */}
          <div className={styles.topRow}>
            <div className={styles.photoWrap}>
              <img
                src={photo}
                alt={data.name}
                className={styles.photo}
                key={theme}
              />
              <div className={styles.openForWork}>
                <span className={styles.dot} />
                Open for Work
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.nameRow}>
                <h1 className={styles.name}>{data.name}</h1>
                <span className={styles.verifiedBadge}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              <div className={styles.metaRow}>
              <p className={styles.location}>
                <MapPin size={13} strokeWidth={2} /> {data.location}
              </p>
              <span className={styles.metaDot}>·</span>
              <a href="tel:09354681910" className={styles.metaLink}>
                <Phone size={13} strokeWidth={2} /> 09354681910
              </a>
              <span className={styles.metaDot}>·</span>
              <a href="mailto:ernestlazatin69@gmail.com" className={styles.metaLink}>
                <Mail size={13} strokeWidth={2} /> ernestlazatin69@gmail.com
              </a>
            </div>
              <p className={styles.title}>{data.title}</p>

              {/* Action buttons — sized to match old modeBadge */}
              <div className={styles.actions}>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.btnPrimary}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Schedule a Call
                </a>
                <a href="mailto:ernestlazatin69@gmail.com" className={styles.btnSecondary}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Send Email
                </a>
                <a href={data.github} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a href={data.linkedin} target="_blank" rel="noreferrer" className={styles.btnSecondary}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* About */}
          <div className={styles.aboutSection}>
            <p className={styles.sectionLabel}>About</p>
            <p className={styles.about}>{data.about}</p>
          </div>

        </div>
    </section>
  )
}