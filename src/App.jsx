//import 'bootstrap/dist/css/bootstrap.min.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
//import './App.css';
import { Flex, Box, Grid } from '@radix-ui/themes';
import Profile from '../components/Profile.jsx';
//import Bio from '../components/Bio.jsx';
//import Skills from '../components/Skills.jsx';
//import Projects from '../components/Projects.jsx';

function App() {
  return (
    <>
      <Theme>
        <Grid columns="1" gap="3" rows="repeat(2)" width="auto">
          <Box>
            <p>Portfolio Title Section</p>
          </Box>
        <Flex gap="3" width="100vw">
          <Box width="25%">
            <Profile />
          </Box>
          <Box>
            <Grid columns="1" gap="3" rows="repeat(2)" width="auto">
              <p>Navigation Tabs Section</p>
              <p>Scrolling Section</p>
            </Grid>
          </Box>
        </Flex>
        </Grid>
      </Theme>
    </>
  )
}

export default App
