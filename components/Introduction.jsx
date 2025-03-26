import { Flex, Box, Text, Heading } from "@radix-ui/themes";
import profile from '../src/assets/profile-photo.png';
import './Introduction.css';

const Introduction = () => {
  return (
    <Flex className="intro-section" justify="center" align="center" p="2" gap="4">
      
      {/* Profile Photo*/}
      <img src={profile} alt="profile photo" className="profile-photo" />

      {/* Name and Introduction */}
      <Box>
        <Text size="6">Hi, I'm</Text>
        <Heading size="9">Melissa McGrath.</Heading>
        <Text size="3">
          I'm currently a Computer Science student at USC. 
          Welcome to my portfolio.
        </Text>
      </Box>
      
    </Flex>
  );
};

export default Introduction;
