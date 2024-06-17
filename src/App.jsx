import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from '../components/NavBar.jsx';
import Intro from '../components/Intro.jsx';
import Bio from '../components/Bio.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Resume from '../components/Resume.jsx';
import BackButton from '../components/BackButton.jsx';

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <Intro />
        <Bio />
        <Skills />
        <Projects />
        <Resume />
      </div>
      
    </>
  )
}

export default App
