import { useState } from "react";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';
import Header from '../components/Header.jsx';
import Introduction from "../components/Introduction.jsx";

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

        <Header selected={navSelected} setSelected={setNavSelected}/>
        
        {navSelected === HOME && (<Introduction />)}
        {navSelected === ABOUT_ME && (<Text>About Me Section TBD</Text>)}
        {navSelected === PROJECTS && (<Text>Projects Section TBD</Text>)}
        {navSelected === RESUME && (<Text>Resume Section TBD</Text>)}

      </Theme>
    </>
  );
}

export default App;
