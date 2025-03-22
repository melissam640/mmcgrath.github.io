import { Grid, Box, Flex, Avatar } from '@radix-ui/themes';
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import profile from '../src/assets/profile.jpg';

function Profile() {
  return (
    <Grid columns="1" gap="3" rows="repeat(2)" width="auto">
      <Avatar 
        size="9" 
        src={profile} 
        fallback="Profile Photo" 
        radius="full" 
      />
      <Box>
        <p>Hi, I'm</p>
        <p>Melissa McGrath</p>
        <p>Computer Science Masters Student at USC</p>
      </Box>
      <Flex>
        <a href="www.linkedin.com/in/melissa-mcgrath" className="icon-link">
          <LinkedInLogoIcon />
        </a>
        <a href="https://github.com/melissam640" className="icon-link">
          <GitHubLogoIcon />
        </a>
      </Flex>
    </Grid>
  );
}

export default Profile;
