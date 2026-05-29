import { Waves, School, GraduationCap } from 'lucide-react'
import { data } from '../data.js'
import styles from './Section.module.css'

const iconMap = {
  FloodWatch: Waves,
  'Galang Elementary School Dashboard': School,
  'Track Me': GraduationCap,
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Projects</h2>

          <a
            href="https://github.com/lilernestooo"
            target="_blank"
            rel="noreferrer"
            className={styles.viewAll}
          >
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <div className={styles.projectGrid}>
          {data.projects.map((proj, i) => {
            const Icon = iconMap[proj.name] ?? Code
            return (
              <div key={i} className={styles.projectCard}>

                <div className={styles.projIcon}>
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                <h3 className={styles.projName}>{proj.name}</h3>

                <p className={styles.projDesc}>{proj.description}</p>

                <div className={styles.tags}>
                  {proj.stack.map((s, j) => (
                    <span key={j} className={styles.tag}>{s}</span>
                  ))}
                </div>

              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}