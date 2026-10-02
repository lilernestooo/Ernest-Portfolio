import { data } from '../data.js'
import styles from '../styles/Section.module.css'
import shoreLogo from '../assets/shore.jpg'
import lgcLogo from '../assets/lgc-logo.png'

const logos = {
  shore: shoreLogo,
  lgc: lgcLogo,
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Work Experience</h2>
        {data.experience.map((job, i) => (
          <div key={i} className={styles.expCard}>
            <div className={styles.cardHeader}>
            <div className={styles.companyRow}>
                <div
                  className={styles.companyLogoWrap}
                  style={job.logoFit === 'contain' ? { width: 'auto' } : undefined}
                >
                  <img
                    src={logos[job.logo]}
                    alt={job.company}
                    className={styles.companyLogo}
                    style={{
                      objectFit: job.logoFit || 'cover',
                      width: job.logoFit === 'contain' ? 'auto' : '100%',
                    }}
                  />
                </div>
                <div>
                  <h3 className={styles.role}>{job.role}</h3>
                  <p className={styles.company}>{job.company}</p>
                </div>
              </div>
              <span className={styles.period}>{job.period}</span>
            </div>
            {job.bullets && job.bullets.length > 0 && (
              <ul className={styles.bullets}>
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
