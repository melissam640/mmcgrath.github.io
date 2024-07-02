import { Slide } from "react-awesome-reveal";
import './Bio.css';

function Bio() {
  return (
    <div id="about-me-section">
        <Slide triggerOnce cascade damping={0.1}>
        <p className="about-me-title">
          About Me
        </p>
        <p className="about-me">
          I'm a former senior project engineer turned software engineer.
        </p>
        <p className="about-me">
          With four years in the construction industry, I refined 
          my problem-solving, teamwork, and project execution abilities. 
        </p>
        <p className="about-me">
          After discovering my passion for programming, I pursued software 
          development, completing a rigorous bootcamp at Hackbright.
        </p>
        <p className="about-me">
          I'm eager to apply my previous project engineering experience and new 
          technical skills to contribute to impactful software projects.
        </p>
        </Slide>
    </div>
  );
}

export default Bio;