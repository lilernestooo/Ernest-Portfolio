import { data } from '../data.js'
import styles from './Section.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(data.skills).map(([category, items]) => (
            <div key={category} className={styles.skillGroup}>
              <h4 className={styles.skillCategory}>{category}</h4>
              <div className={styles.tags}>
                {items.map((skill, i) => (
                  <span key={i} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
