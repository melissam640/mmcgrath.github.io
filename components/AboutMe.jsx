import { Flex, Box, Text, Heading } from "@radix-ui/themes";
import './AboutMe.css';

const AboutMe = () => {
  return (
    <Flex className="about-me-section" direction="column" justify="left" align="center" p="2" gap="4">
      
      {/* Section Title */}
      <Box p="3" gap="4" width="100%">
        <Heading size="9">About Me.</Heading>
      </Box>

      {/* Personal Bio Section */}
      <Flex p="3" direction="column" gap="4" width="100%">
        <Text size="3">
          I initially began my career in the construction industry as a project 
          engineer. Being part of the construction team, I loved the 
          problem-solving that came with figuring out how to bring a set of 
          plans into reality. I felt excited and accomplished when finding a 
          creative solution.
        </Text>
        <Text size="3">
          However, as I progressed in my career, I found that I lacked a 
          passion for the cost negotiation and budgeting duties that came with 
          more senior positions in construction. This led me to explore other 
          career paths and discover a genuine enjoyment for coding.
        </Text>
        <Text size="3">
          After a few months of self-study and introductory coding classes, I 
          started a software engineering bootcamp. I went from writing my first 
          for loop to building my first full-stack web application, growing 
          more confident that I was pursuing the right path. To further 
          strengthen my technical skills and expand my knowledge of computer 
          science, I enrolled in a computer science master’s program at the 
          University of Southern California.
        </Text>
        <Text size="3">
          I am currently a student at USC, anticipating graduation at the end of 
          Spring 2026, and aiming to secure a software engineering role. I am 
          excited about the opportunities ahead and am committed to 
          continuously learning and growing in this field!
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
