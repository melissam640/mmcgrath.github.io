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
          With four years in construction project management, I've refined 
          my problem-solving, teamwork, and project execution abilities. 
        </p>
        <p className="about-me">
          Transitioning from construction, I pursued programming for its 
          logical problem-solving appeal, completing a rigorous bootcamp at 
          Hackbright.
        </p>
        <p className="about-me">
          I'm eager to apply my engineering background and 
          technical expertise to innovate in software development, 
          contributing to impactful projects and advancing in the field.
        </p>
        </Slide>
    </div>
  );
}

export default Bio;