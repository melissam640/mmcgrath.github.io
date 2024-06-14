import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from '../components/NavBar.jsx';
import Intro from '../components/Intro.jsx';
import Bio from '../components/Bio.jsx';
import Skills from '../components/Skills.jsx';

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <NavBar />
        </header>
        <Intro />
        <Bio />
        <Skills />
      </div>
      
    </>
  )
}

export default App
