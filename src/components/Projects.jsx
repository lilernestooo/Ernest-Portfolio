import { Waves, School, GraduationCap, ClipboardList } from 'lucide-react'
import { data } from '../data.js'
import styles from '../styles/Section.module.css'

const iconMap = {
  FloodWatch: Waves,
  'Galang Elementary School Dashboard': School,
  'Track Me': GraduationCap,
  'DailyMe': ClipboardList,
}

// Simple Icons slug map
const ICON_SLUGS = {
  'JavaScript':   'javascript',
  'Firebase':     'firebase',
  'Vite':         'vite',
  'Node.js':      'nodedotjs',
  'Express':      'express',
  'PostgreSQL':   'postgresql',
  'ReactJS':      'react',
  'React.js':     'react',
  'Laravel':      'laravel',
  'React Breeze': 'react',
  'MySQL':        'mysql',
  'Docker':       'docker',
  'TypeScript':   'typescript',
  'Vue.js':       'vuedotjs',
  'GitHub':       'github',
  'Vercel':       'vercel',
  'Render':       'render',
  'Bitbucket':    'bitbucket',
}

// Official brand colors (hex, no #)
const ICON_COLORS = {
  javascript:  'F7DF1E',
  firebase:    'FFCA28',
  vite:        '646CFF',
  nodedotjs:   '339933',
  express:     '000000',
  postgresql:  '4169E1',
  react:       '61DAFB',
  laravel:     'FF2D20',
  mysql:       '4479A1',
  docker:      '2496ED',
  typescript:  '3178C6',
  vuedotjs:    '4FC08D',
  github:      '181717',
  vercel:      '000000',
  render:      '46E3B7',
  bitbucket:   '0052CC',
}

function StackBadge({ tech }) {
  const slug = ICON_SLUGS[tech]
  const color = slug ? ICON_COLORS[slug] : null

  return (
    <span className={styles.stackBadge} title={tech}>
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color ?? '888888'}`}
          alt={tech}
          className={styles.stackIcon}
          width={14}
          height={14}
          loading="lazy"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      )}
      <span className={styles.stackLabel}>{tech}</span>
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Projects</h2>
        </div>

        <div className={styles.projectGrid}>
          {data.projects.map((proj, i) => {
            const Icon = iconMap[proj.name] ?? ClipboardList
            return (
              <div key={i} className={styles.projectCard}>

                <div className={styles.projIcon}>
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                <h3 className={styles.projName}>{proj.name}</h3>

                <p className={styles.projDesc}>{proj.description}</p>

                <div className={styles.projectTags}>
                  {proj.stack.map((s, j) => (
                    <StackBadge key={j} tech={s} />
                  ))}
                </div>

              </div>
            )
          })}
        </div>

        <div className={styles.viewAllWrap}>
          
          <a href="https://github.com/lilernestooo"
          target="_blank"
          rel="noreferrer"
          className={styles.viewAll}
        >
          View All Projects
          <span className={styles.viewAllArrow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </a>
        </div>

      </div>
    </section>
  )
}