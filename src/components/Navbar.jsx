import { useEffect, useRef, useState, useCallback } from 'react'
import {
  User,
  Briefcase,
  GraduationCap,
  Grid,
  Star,
  ChartNoAxesColumn,
  Sun,
  Moon
} from 'lucide-react'
import styles from '../styles/Navbar.module.css'

const links = [
  { href: '#abouttt', label: 'About', Icon: User },
  { href: '#experience', label: 'Experience', Icon: Briefcase },
  { href: '#education', label: 'Education', Icon: GraduationCap },
  { href: '#projects', label: 'Projects', Icon: Grid },
  { href: '#skills', label: 'Skills', Icon: Star },
  { href: '#github-activity', label: 'Activity', Icon: ChartNoAxesColumn },
]

export default function Navbar({ theme, onToggle }) {
  const isDark = theme === 'dark'
  const [collapsed, setCollapsed] = useState(false)
  const timerRef = useRef(null)
  const touchStartY = useRef(null)
  const glowRef = useRef(null)

  const resetTimer = useCallback(() => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCollapsed(true), 3000)
  }, [])

  const expand = useCallback(() => {
    setCollapsed(false)
    resetTimer()
  }, [resetTimer])

  useEffect(() => {
    const onActivity = () => {
      if (!collapsed) resetTimer()
    }

    window.addEventListener('mousemove', onActivity)
    window.addEventListener('keydown', onActivity)
    window.addEventListener('click', onActivity)
    window.addEventListener('scroll', onActivity)

    resetTimer()

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('mousemove', onActivity)
      window.removeEventListener('keydown', onActivity)
      window.removeEventListener('click', onActivity)
      window.removeEventListener('scroll', onActivity)
    }
  }, [collapsed, resetTimer])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const onMouseDown = (e) => {
      touchStartY.current = e.clientY
    }

    const onMouseMove = (e) => {
      if (touchStartY.current === null) return

      if (touchStartY.current - e.clientY > 12) {
        touchStartY.current = null
        expand()
      }
    }

    const onMouseUp = () => {
      touchStartY.current = null
    }

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      if (touchStartY.current === null) return

      if (touchStartY.current - e.touches[0].clientY > 12) {
        touchStartY.current = null
        expand()
      }
    }

    glow.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)

    glow.addEventListener('touchstart', onTouchStart, { passive: true })
    glow.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      glow.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      glow.removeEventListener('touchstart', onTouchStart)
      glow.removeEventListener('touchmove', onTouchMove)
    }
  }, [expand])

  return (
    <>
      <div
        ref={glowRef}
        className={`${styles.glowLine} ${
          collapsed ? styles.glowVisible : ''
        }`}
        onClick={expand}
        aria-label="Reveal navigation"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && expand()}
      />

      <nav className={`${styles.nav} ${collapsed ? styles.navCollapsed : ''}`}>
        <div className={styles.links}>
          {links.map(({ href, label, Icon }) => (
            <a key={href} href={href} className={styles.link}>
              <Icon size={16} />
              <span className={styles.tooltip}>{label}</span>
            </a>
          ))}
        </div>

        <label className={styles.toggle} aria-label="Toggle theme">
          <input
            type="checkbox"
            checked={isDark}
            onChange={onToggle}
            className={styles.toggleInput}
          />

          <span className={styles.toggleTrack}>
            <span className={styles.toggleIcon}>
              {isDark ? (
                <Moon size={12} strokeWidth={2.5} />
              ) : (
                <Sun size={12} strokeWidth={2.5} />
              )}
            </span>
          </span>
        </label>
      </nav>
    </>
  )
}