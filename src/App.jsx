import { useState } from "react";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { Flex, Box, Grid, Text, Separator } from '@radix-ui/themes';
import Header from '../components/Header.jsx';

function App() {

  const HOME_SELECTED = 1;
  const ABOUT_ME_SELECTED = 2;
  const PROJECTS_SELECTED = 3;
  const RESUME_SELECTED = 4;
  
  const [navSelected, setNavSelected] = useState(HOME_SELECTED);

  return (
    <>
      <Theme appearance="dark">
        <Grid columns="1" gap="3" rows="repeat(2)" width="auto">
          <Header selected={navSelected} setSelected={setNavSelected}/>
        <Flex gap="3" width="100vw">
          <Box>
            {navSelected === HOME_SELECTED && (<Text>Home and Introduction Section TBD</Text>)}
            {navSelected === ABOUT_ME_SELECTED && (<Text>About Me Section TBD</Text>)}
            {navSelected === PROJECTS_SELECTED && (<Text>Projects Section TBD</Text>)}
            {navSelected === RESUME_SELECTED && (<Text>Resume Section TBD</Text>)}
          </Box>
        </Flex>
        </Grid>
      </Theme>
    </>
  );
}

export default App;
