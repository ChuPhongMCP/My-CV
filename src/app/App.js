import './App.css'
import About from 'components/About'
import Education from 'components/Education'
import Experience from 'components/Experience'
import Interests from 'components/Interests'
import Projects from 'components/Projects'
import Skill from 'components/Skill'
import TheEnd from 'components/TheEnd'

function App() {
  return (
    <div className="container">
      <div className='cover_content'>
        <About />

        <Experience />

        <Education />

        <Skill />

        <Projects />

        <Interests />

        <TheEnd />
      </div>
    </div>
  )
}

export default App
