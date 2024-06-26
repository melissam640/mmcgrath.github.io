import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from '../components/NavBar.jsx';
import Intro from '../components/Intro.jsx';
import Bio from '../components/Bio.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <Intro />
        <Bio />
        <Skills />
        <Projects />
      </div>
      
    </>
  )
}

export default App
