import React, { useEffect, useState } from 'react';
import './TestBackground.css';

const ScrollBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-background ${getBackgroundClass(scrollPosition)}`}>
      <div className="content">
        <h1>Scroll to Change Background</h1>
        <p>Keep scrolling to see the background change...</p>
        <div style={{ height: '200vh' }}></div>
      </div>
    </div>
  );
};

const getBackgroundClass = (scrollPosition) => {
  if (scrollPosition < 300) {
    return 'bg1';
  } else if (scrollPosition < 600) {
    return 'bg2';
  } else {
    return 'bg3';
  }
};

export default ScrollBackground;
