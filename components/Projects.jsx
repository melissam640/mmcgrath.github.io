import { Flex, Box, Grid, Text, Heading, Link } from "@radix-ui/themes";
import totalview from '../src/assets/totalview1.gif';
import zanzibar from '../src/assets/zanzibar.gif';
import './Projects.css';

const Projects2 = () => {
  return (
    <Flex className="projects-section" direction="column" justify="left" align="center" p="2" gap="4">
      
      {/* Section Title */}
      <Box p="3" gap="4" width="100%">
        <Heading size="9">Projects.</Heading>
      </Box>

	  <Grid columns={{ initial: "1", md: "1fr 2fr" }} p="4" gap="6" align="center">
          
		  {/* Row 1 */}
          <Box>
			<img src={totalview} alt="totalview gif" className="project-gif" />
		  </Box>
          <Box className="project-description" p="3">
			<Heading as="div" size="7" mb="3" weight="bold">
			  TotalView
			</Heading>
			<Text color="gray" size="3">
				TotalView is a productivity app that allows a user to create 
				traditional calendar events, routines with repeating sets of 
				actions, and one-time or recurring task lists. 
			</Text>
			<Text color="gray" size="3" mt="3">
				View on <Link href="https://github.com/melissam640/totalview.git" color="indigo">GitHub</Link> or watch the demo <Link href="https://www.youtube.com/watch?v=cfkpgqYO2BU" color="indigo">video</Link>. 
			</Text>
          </Box>

		  {/* Row 2 */}
		  <Box>
			<img src={zanzibar} alt="zanzibar gif" className="project-gif" />
		  </Box>
          <Box className="project-description" p="3">
			<Heading as="div" size="7" mb="3" weight="bold">
			  Zanzabar
			</Heading>
			<Text color="gray" size="3">
				A dice game where the goal is to be the first to get rid of 
				your tokens. Roll the dice to try to get a higher score than
				the computer.
			</Text>
			<Text color="gray" size="3" mt="3">
				View on <Link href="https://github.com/melissam640/zanzibar-game" color="indigo">GitHub</Link> or <Link href="https://zanzibar-dice-game.netlify.app/" color="indigo">play</Link>. 
			</Text>
          </Box>

		</Grid>
    </Flex>
  );
};

export default Projects2;
