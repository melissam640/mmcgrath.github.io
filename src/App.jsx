//import 'bootstrap/dist/css/bootstrap.min.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
//import './App.css';
import { Flex, Box, Grid, Text, Separator } from '@radix-ui/themes';
import Header from '../components/Header.jsx';

function App() {
  return (
    <>
      <Theme appearance="dark">
        <Grid columns="1" gap="3" rows="repeat(2)" width="auto">
          <Header />
        <Flex gap="3" width="100vw">
          <Box>
            
          </Box>
        </Flex>
        </Grid>
      </Theme>
    </>
  )
}

export default App
