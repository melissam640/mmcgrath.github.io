import { useState } from "react";
import { Box, Flex, Text, Button, IconButton, Container } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import './Header.css';

const Header = ({ selected, setSelected }) => {
  
  const HOME_SELECTED = 1;
  const ABOUT_ME_SELECTED = 2;
  const PROJECTS_SELECTED = 3;
  const RESUME_SELECTED = 4;

  //const [selected, setSelected] = useState(HOME_SELECTED);

  return (
    <Box as="header" className="header-border">
      <Container size="4">
        <Flex justify="between" align="center" p="2" gap="4">
          {/* Website Title */}
          <Text size="4" weight="bold">Melissa McGrath</Text>

          {/* Navigation Links */}
          <Flex gap="6" align="center">
            <Button 
              variant={selected === HOME_SELECTED ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(HOME_SELECTED)}
            >
              Home
            </Button>
            <Button 
              variant={selected === ABOUT_ME_SELECTED ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(ABOUT_ME_SELECTED)}
            >
              About Me
            </Button>
            <Button 
              variant={selected === PROJECTS_SELECTED ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(PROJECTS_SELECTED)}
            >
              Projects
            </Button>
            <Button 
              variant={selected === RESUME_SELECTED ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(RESUME_SELECTED)}
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
    </Box>
  );
};

export default Header;
