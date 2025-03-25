import { Box, Flex, Text, Link, IconButton, Container } from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import './Header.css';

const Header = () => {
  return (
    <Box as="header" className="header-border">
      <Container size="4">
        <Flex justify="between" align="center" p="2" gap="4">
          {/* Website Title */}
          <Text size="4" weight="bold">Melissa McGrath</Text>

          {/* Navigation Links */}
          <Flex gap="6" align="center">
            <Link href="#" color="gray" size="3">
              Home
            </Link>
            <Link href="#" color="gray" size="3">
              About Me
            </Link>
            <Link href="#" color="gray" size="3">
              Projects
            </Link>
            <Link href="#" color="gray" size="3">
              Resume
            </Link>
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
