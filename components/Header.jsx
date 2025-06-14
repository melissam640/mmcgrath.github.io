import { Flex, Box, Text, Button, IconButton, Container, DropdownMenu } from "@radix-ui/themes";
import { HamburgerMenuIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
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
          <Flex className="nav-links" gap="6" align="center">
            <Button 
              className="nav-button"
              variant={selected === HOME ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(HOME)}
            >
              Home
            </Button>
            <Button 
              className="nav-button"
              variant={selected === ABOUT_ME ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(ABOUT_ME)}
            >
              About Me
            </Button>
            <Button 
              className="nav-button"
              variant={selected === PROJECTS ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(PROJECTS)}
            >
              Projects
            </Button>
            <Button 
              className="nav-button"
              variant={selected === RESUME ? "soft" : "ghost"} 
              radius="full" 
              onClick={() => setSelected(RESUME)}
            >
              Resume
            </Button>
          </Flex>

          <Flex gap="3" mt="1">
            {/* Hamburger Menu */}
            <Box className="hamburger-menu">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <IconButton variant="ghost" size="2">
                    <HamburgerMenuIcon />
                  </IconButton>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onSelect={() => setSelected(HOME)}>
                    Home
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => setSelected(ABOUT_ME)}>
                    About Me
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => setSelected(PROJECTS)}>
                    Projects
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => setSelected(RESUME)}>
                    Resume
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Box>
            {/* Social Media Links */}
            <IconButton size="2" variant="ghost" asChild>
              <a href="https://github.com/melissam640" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon />
              </a>
            </IconButton>
            <IconButton size="2" variant="ghost" asChild>
              <a href="https://www.linkedin.com/in/melissa-mcgrath/" target="_blank" rel="noopener noreferrer">
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
