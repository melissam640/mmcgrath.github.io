import { Tabs, Box, Text } from '@radix-ui/themes';

function NavTabs() {
  return (
    <Tabs.Root defaultValue="about-me">
      <Tabs.List>
        <Tabs.Trigger value="about-me">About Me</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="resume">Resume</Tabs.Trigger>
      </Tabs.List>

      <Box pt="3">
        <Tabs.Content value="about-me">
          <Text size="2">Bio section.</Text>
        </Tabs.Content>

        <Tabs.Content value="projects">
          <Text size="2">Project section.</Text>
        </Tabs.Content>

        <Tabs.Content value="resume">
          <Text size="2">Resume section.</Text>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  );
}

export default NavTabs;
