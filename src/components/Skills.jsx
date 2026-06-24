import { data } from '../data.js'
import styles from '../styles/Section.module.css'

// Simple Icons slug map — maps display name → simpleicons.org slug
const ICON_SLUGS = {
  // Frontend
  'React.js':     'react',
  'Vite':         'vite',
  'TypeScript':   'typescript',
  'Vue.js':       'vuedotjs',
  // Backend
  'Laravel':      'laravel',
  'Node.js':      'nodedotjs',
  'Express':      'express',
  'Firebase':     'firebase',
  // Database
  'MySQL':        'mysql',
  'PostgreSQL':   'postgresql',
  'Firestore':    'firebase',
  // Deployment & VCS
  'Vercel':       'vercel',
  'Render':       'render',
  'GitHub':       'github',
  'Bitbucket':    'bitbucket',
  // Docker (used in projects, might appear)
  'Docker':       'docker',
}

// Brand colors for each icon (hex, no #)
const ICON_COLORS = {
  react:       '61DAFB',
  vite:        '646CFF',
  typescript:  '3178C6',
  vuedotjs:    '4FC08D',
  laravel:     'FF2D20',
  nodedotjs:   '339933',
  express:     '000000',
  firebase:    'FFCA28',
  mysql:       '4479A1',
  postgresql:  '4169E1',
  vercel:      '000000',
  render:      '46E3B7',
  github:      '181717',
  bitbucket:   '0052CC',
  docker:      '2496ED',
}

function SkillBadge({ skill }) {
  const slug = ICON_SLUGS[skill]
  const color = slug ? ICON_COLORS[slug] : null

  return (
    <span className={styles.skillBadge} title={skill}>
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color ?? '888888'}`}
          alt={skill}
          className={styles.skillIcon}
          width={16}
          height={16}
          loading="lazy"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      )}
      <span className={styles.skillLabel}>{skill}</span>
    </span>
  )
}

export default function Skills() {
  // Soft skills stay as plain tags (no logos)
  const isSoftSkill = (category) => category === 'Soft Skills'

  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(data.skills).map(([category, items]) => (
            <div key={category} className={styles.skillGroup}>
              <h4 className={styles.skillCategory}>{category}</h4>
              <div className={styles.tags}>
                {items.map((skill, i) =>
                  isSoftSkill(category)
                    ? <span key={i} className={styles.tag}>{skill}</span>
                    : <SkillBadge key={i} skill={skill} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}