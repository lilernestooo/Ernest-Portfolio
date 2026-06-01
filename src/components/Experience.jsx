import { data } from '../data.js'
import styles from '../styles/Section.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Work Experience</h2>
        {data.experience.map((job, i) => (
          <div key={i} >
            <div className={styles.cardHeader}>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
              </div>
              <span className={styles.period}>{job.period}</span>
            </div>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
