import { Flex, Text, Button, IconButton, Container } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import './Header.css';

const Header = ({ selected, setSelected }) => {
  
  // navigation links that can be selected
  const HOME = 1;
  const ABOUT_ME = 2;
  const PROJECTS = 3;
  const RESUME = 4;

  return (
    <Flex as="header" className="header" width="100vw">
      <Container size="4">

        <Flex justify="between" align="center" p="2" gap="4">
          {/* Website Title */}
          <Text size="4" weight="bold">Melissa McGrath</Text>

          {/* Navigation Links */}
          <Flex gap="6" align="center">
            <Button 
              variant={selected === HOME ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(HOME)}
            >
              Home
            </Button>
            <Button 
              variant={selected === ABOUT_ME ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(ABOUT_ME)}
            >
              About Me
            </Button>
            <Button 
              variant={selected === PROJECTS ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(PROJECTS)}
            >
              Projects
            </Button>
            <Button 
              variant={selected === RESUME ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(RESUME)}
            >
              Resume
            </Button>
          </Flex>

          {/* Social Media Links */}
          <Flex gap="3">
            <IconButton size="2" variant="ghost" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon />
              </a>
            </IconButton>
            <IconButton size="2" variant="ghost" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedInLogoIcon />
              </a>
            </IconButton>
          </Flex>
        </Flex>

      </Container>
    </Flex>
  );
};

export default Header;
