import { useState } from "react";
import '@radix-ui/themes/styles.css';
import { Theme, Box } from '@radix-ui/themes';
import Header from '../components/Header.jsx';
import Introduction from "../components/Introduction.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Projects from "../components/Projects.jsx";
import Resume from "../components/Resume.jsx";
import "./App.css";

function App() {

  // navigation links that can be selected
  const HOME = 1;
  const ABOUT_ME = 2;
  const PROJECTS = 3;
  const RESUME = 4;
  
  const [navSelected, setNavSelected] = useState(HOME);

  return (
    <>
      <Theme appearance="dark">
        <Box className="fixed-background" />

        <Header selected={navSelected} setSelected={setNavSelected}/>
        
        {navSelected === HOME && (<Introduction />)}
        {navSelected === ABOUT_ME && (<AboutMe />)}
        {navSelected === PROJECTS && (<Projects />)}
        {navSelected === RESUME && (<Resume />)}
      </Theme>
    </>
  );
}

export default App;
