import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'
import ExperienceProjects from './components/ExperienceProjects'
import Chatbot from './components/Chatbot'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white dark:bg-gray-950 text-black dark:text-white">
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero />
      <Chatbot />
      <About />
      <ExperienceProjects />
      <Footer />
    </div>
  )
}


export default App
