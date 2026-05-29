import { data } from '../data.js'
import styles from './Section.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.projectGrid}>
          {data.projects.map((proj, i) => (
            <div key={i} className={styles.projectCard}>
              <div className={styles.projIcon}>{proj.icon}</div>
              <h3 className={styles.projName}>{proj.name}</h3>
              <p className={styles.projDesc}>{proj.description}</p>
              <div className={styles.tags}>
                {proj.stack.map((s, j) => (
                  <span key={j} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
