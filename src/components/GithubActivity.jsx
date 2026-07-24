import sectionStyles from '../styles/Section.module.css'
import styles from '../styles/Git.module.css'

const GITHUB_USERNAME = 'lilernestooo'

export default function GithubActivity() {
  return (
    <section id="github-activity" className={sectionStyles.section}>
      <div className="container">
        <div className={styles.githubCard}>
          <h2 className={styles.githubHeading}>Always Building</h2>
          <p className={styles.githubSub}>
            A look at my recent commit activity on GitHub.
          </p>

          <div className={styles.githubChart}>
            <img
              src={`https://ghchart.rshah.org/111110/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              loading="lazy"
            />
          </div>

          <div className={styles.githubStatsRow}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=default&hide_border=true&count_private=true`}
              alt="GitHub stats"
              loading="lazy"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&theme=default`}
              alt="Top languages"
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.githubCta}>
            
            <a href={`https://github.com/${GITHUB_USERNAME}`}
             target="_blank"
             rel="noreferrer"
             className={sectionStyles.viewAll}
           >
             View Profile
             <span className={sectionStyles.viewAllArrow}>
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