import { User, Briefcase, Grid, Star, Mail, Sun, Moon } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>EL</div>
      <div className={styles.links}>
        <a href="#about" title="About">
          <span className={styles.linkText}>About</span>
          <User size={16} className={styles.linkIcon} />
        </a>
        <a href="#experience" title="Experience">
          <span className={styles.linkText}>Experience</span>
          <Briefcase size={16} className={styles.linkIcon} />
        </a>
        <a href="#projects" title="Projects">
          <span className={styles.linkText}>Projects</span>
          <Grid size={16} className={styles.linkIcon} />
        </a>
        <a href="#skills" title="Skills">
          <span className={styles.linkText}>Skills</span>
          <Star size={16} className={styles.linkIcon} />
        </a>
        <a href="#contact" title="Contact">
          <span className={styles.linkText}>Contact</span>
          <Mail size={16} className={styles.linkIcon} />
        </a>
      </div>
      <button
        className={styles.themeBtn}
        onClick={onToggle}
        aria-label="Toggle theme"
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
        <span className={styles.themeBtnText}>{isDark ? 'Light' : 'Dark'}</span>
      </button>
    </nav>
  )
}