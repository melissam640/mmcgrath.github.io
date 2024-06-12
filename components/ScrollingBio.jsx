import { useEffect, useState, useRef } from 'react';
import { Fade } from "react-awesome-reveal";
import './ScrollingBio.css';

const StickyScroll = () => {
    const [isSticky, setIsSticky] = useState(true);
    const secondTextRef = useRef(null);
  
    const handleScroll = () => {
      if (secondTextRef.current) {
        const secondTextMiddle = secondTextRef.current.getBoundingClientRect().top + secondTextRef.current.getBoundingClientRect().height / 2;
        setIsSticky(secondTextMiddle > window.innerHeight / 2);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className="container">
        <div className={`image-section ${isSticky ? 'sticky' : ''}`}>
          <img src="components/profilephoto.jpg" alt="Sticky Image" className="sticky-image" />
        </div>
        <div className="text-section">
          <Fade>
          <div className="text-block first-text-block">
            <h1>Welcome!</h1>
            <p>I'm Melissa, a former senior project engineer turned software developer.</p>
          </div>
          </Fade>
          <Fade>
          <div className="text-block" ref={secondTextRef}>
            {/* TODO: Revisit this bio later to reword. */}
            <p>With four years in construction project management, I've refined 
              my problem-solving, teamwork, and project execution abilities. 
              Transitioning from construction, I pursued programming for its 
              logical problem-solving appeal, completing a rigorous bootcamp at 
              Hackbright. I'm eager to apply my engineering background and 
              technical expertise to innovate in software development, 
              contributing to impactful projects and advancing in the field.</p>
          </div>
          </Fade>
        </div>
      </div>
    );
  };
  
  export default StickyScroll;
