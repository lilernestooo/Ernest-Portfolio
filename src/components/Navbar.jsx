import { User, Briefcase, Grid, Star, Mail, Sun, Moon } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',      label: 'About',      Icon: User },
  { href: '#experience', label: 'Experience', Icon: Briefcase },
  { href: '#projects',   label: 'Projects',   Icon: Grid },
  { href: '#skills',     label: 'Skills',     Icon: Star },
  { href: '#contact',    label: 'Contact',    Icon: Mail },
]

export default function Navbar({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>EL</div>

      <div className={styles.links}>
        {links.map(({ href, label, Icon }) => (
          <a key={href} href={href} className={styles.link}>
            <Icon size={16} />
            <span className={styles.tooltip}>{label}</span>
          </a>
        ))}
      </div>

      <button
        className={styles.themeBtn}
        onClick={onToggle}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
        <span className={styles.themeBtnText}>{isDark ? 'Light' : 'Dark'}</span>
      </button>
    </nav>
  )
}