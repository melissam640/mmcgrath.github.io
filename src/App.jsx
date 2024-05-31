import { useState, useEffect } from 'react'
import { Fade } from "react-awesome-reveal"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton.jsx'

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
      <Fade>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Welcome!</h1>
      <p>I'm Melissa, a former senior project engineer turned software developer.</p>
      </Fade>
      <h1>Vite + React</h1>
      <div className="card">
        <h3>{ currentTime }</h3>
      </div>
      <MyButton message="Start" />
      <MyButton message="End" />
      <Fade>
        <p>I will gently appear as I enter the viewport</p>
      </Fade>
    </>
  )
}

export default App
