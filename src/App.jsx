import { useTheme } from './hooks/useTheme.js'
import { data } from './data.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import { Education, Contact } from './components/EducationContact.jsx'
import styles from './styles/Section.module.css'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggle={toggle} />
      <main className={styles.layout}>
        <aside className={styles.sidebar}>
          <Hero theme={theme} />
        </aside>
        <div className={styles.content}>
        <section className={styles.section} id="about">
            <h2 className={styles.heading}>About</h2>
            <div className={styles.aboutContainer}>
              <p className={styles.aboutText}>{data.about}</p>
            </div>
          </section>
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Ernest Bernard T. Lazatin · kargadev
      </footer>
    </>
  )
}
