import { useTheme } from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import { Education, Contact } from './components/EducationContact.jsx'
import styles from './components/Section.module.css'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggle={toggle} />
      <main>
        <Hero theme={theme} />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Ernest Bernard T. Lazatin · kargadev
      </footer>
    </>
  )
}
