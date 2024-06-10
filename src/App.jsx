import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyButton from './MyButton.jsx';
import NavBar from '../components/NavBar.jsx';

function App() {
  // const [count, setCount] = useState(0)

  const [currentTime, setCurrentTime] = useState(0);

  // empty dependency array means this function will be called once when the component renders
  useEffect( () => {
    fetch('/time')
    .then((resp) => {
      return resp.json()})
    .then((data) => {
      setCurrentTime(data.time)
    })
  }, [] );

  return (
    <>
      <div className="app-container">
        <header>
          <NavBar />
        </header>
        <Fade>
        <h1>Welcome!</h1>
        <p>I'm Melissa, a former senior project engineer turned software developer.</p>
        </Fade>
        <MyButton message="Start" />
        <MyButton message="End" />
      </div>
      
    </>
  )
}

export default App
