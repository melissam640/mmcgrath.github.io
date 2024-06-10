import React, { useEffect, useState, useRef } from 'react';
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
          <img src="components/default-image.webp" alt="Sticky Image" className="sticky-image" />
        </div>
        <div className="text-section">
          <div className="text-block">
            <p>Your first block of text goes here...</p>
          </div>
          <div className="text-block" ref={secondTextRef}>
            <p>Your second block of text goes here...</p>
          </div>
          <div className="text-block">
            <p>More content after the second text...</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default StickyScroll;
