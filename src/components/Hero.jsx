import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import profileLight from '../assets/profile-light.png'
import profileDark from '../assets/profile-dark.png'
import { MapPin, Phone, Mail } from 'lucide-react'
import { data } from '../data.js'
import styles from './Hero.module.css'

// ─── EmailJS Config ──────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
// ─────────────────────────────────────────────────────────────────────────────

const SEND_STATES = { IDLE: 'idle', SENDING: 'sending', SENT: 'sent', ERROR: 'error' }

export default function Hero({ theme }) {
  const isDark = theme === 'dark'
  const photo  = isDark ? profileDark : profileLight

  const [showResume,  setShowResume]  = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [sendState,   setSendState]   = useState(SEND_STATES.IDLE)
  const [formError,   setFormError]   = useState('')

  const formRef = useRef(null)

  // ── Field state ──────────────────────────────────────────────────────────
  const [fields, setFields] = useState({
    from_name:    '',
    from_email:   '',
    subject:      '',
    message:      '',
  })

  const handleChange = e => {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (formError) setFormError('')
  }

  // ── Validation ───────────────────────────────────────────────────────────
  const validate = () => {
    if (!fields.from_name.trim())  return 'Please enter your name.'
    if (!fields.from_email.trim()) return 'Please enter your email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email))
      return 'Please enter a valid email address.'
    if (!fields.subject.trim())    return 'Please enter a subject.'
    if (!fields.message.trim())    return 'Please enter a message.'
    return ''
  }

  // ── Send ─────────────────────────────────────────────────────────────────
  const handleSend = async e => {
    e.preventDefault()
    const error = validate()
    if (error) { setFormError(error); return }

    setSendState(SEND_STATES.SENDING)
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setSendState(SEND_STATES.SENT)
      setFields({ from_name: '', from_email: '', subject: '', message: '' })
    } catch {
      setSendState(SEND_STATES.ERROR)
    }
  }

  const closeContact = () => {
    setShowContact(false)
    setSendState(SEND_STATES.IDLE)
    setFormError('')
    setFields({ from_name: '', from_email: '', subject: '', message: '' })
  }

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
              <span className={styles.metaLink}>
                <Mail size={13} strokeWidth={2} /> ernestlazatin69@gmail.com
              </span>
            </div>

            <p className={styles.title}>{data.title}</p>

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

              {/* ── Send Email → opens contact modal ── */}
              <button
                className={styles.btnSecondary}
                onClick={() => setShowContact(true)}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send Email
              </button>

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

              <button className={styles.btnSecondary} onClick={() => setShowResume(true)}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                View Resume
              </button>
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

      {/* ══════════════════════════════════════════════════
          CONTACT FORM MODAL
      ══════════════════════════════════════════════════ */}
      {showContact && (
        <div className={styles.modalOverlay} onClick={closeContact}>
          <div className={`${styles.modal} ${styles.contactModal}`} onClick={e => e.stopPropagation()}>

            {/* Header */}
            <div className={styles.modalHeader}>
              <div className={styles.contactModalMeta}>
                <div className={styles.contactAvatar}>
                  <Mail size={14} strokeWidth={2} />
                </div>
                <div>
                  <span className={styles.modalTitle}>Send a Message</span>
                  <p className={styles.contactSubtitle}>ernestlazatin69@gmail.com</p>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={closeContact}>✕</button>
            </div>

            {/* Success state */}
            {sendState === SEND_STATES.SENT ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successText}>
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button className={styles.btnPrimary} onClick={closeContact} style={{ marginTop: 8 }}>
                  Close
                </button>
              </div>
            ) : (
              /* Form */
              <form ref={formRef} onSubmit={handleSend} className={styles.contactForm} noValidate>

                {/* From name + email */}
                <div className={styles.fieldRow}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel} htmlFor="from_name">Full Name</label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      className={styles.fieldInput}
                      placeholder="Jane Doe"
                      value={fields.from_name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel} htmlFor="from_email">Email Address</label>
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      className={styles.fieldInput}
                      placeholder="jane@example.com"
                      value={fields.from_email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={styles.fieldInput}
                    placeholder="Project inquiry / Collaboration / etc."
                    value={fields.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* Message */}
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.fieldInput} ${styles.fieldTextarea}`}
                    placeholder="Hi Ernest, I'd like to discuss…"
                    value={fields.message}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>

                {/* Error */}
                {formError && (
                  <p className={styles.formError}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {formError}
                  </p>
                )}

                {/* Server error */}
                {sendState === SEND_STATES.ERROR && (
                  <p className={styles.formError}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    Something went wrong. Please try again or email directly.
                  </p>
                )}

                {/* Footer */}
                <div className={styles.contactFooter}>
                  <p className={styles.contactDisclaimer}>
                    I typically respond within 1–2 business days.
                  </p>
                  <button
                    type="submit"
                    className={styles.btnPrimary}
                    disabled={sendState === SEND_STATES.SENDING}
                  >
                    {sendState === SEND_STATES.SENDING ? (
                      <>
                        <svg className={styles.spinner} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════
          RESUME MODAL (unchanged)
      ══════════════════════════════════════════════════ */}
      {showResume && (
        <div className={styles.modalOverlay} onClick={() => setShowResume(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>Ernest Bernard T. Lazatin — Resume</span>
              <div className={styles.modalActions}>
                <a
                  href="/Ernest Lazatin (Resume).pdf"
                  download="Ernest Lazatin (Resume).pdf"
                  className={styles.btnPrimary}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download
                </a>
                <button className={styles.closeBtn} onClick={() => setShowResume(false)}>✕</button>
              </div>
            </div>
            <iframe
              src="../Ernest Lazatin (Resume).pdf"
              className={styles.resumeFrame}
              title="Ernest Lazatin Resume"
            />
          </div>
        </div>
      )}

    </section>
  )
}