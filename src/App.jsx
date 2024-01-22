
import styles from './App.module.css'
import { Contact } from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import { About } from './components/about/about'

function App() {

  return (
   <div className={styles.App}>
    <Navbar/>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   </div>
  )
}

export default App
