import React from 'react';
import useInViewAnimation from '../hooks/useInViewAnimation';

const AnimatedSection = ({ children, className = '', style = {}, delay = 0 }) => {
  const [ref, inView] = useInViewAnimation();
  return (
    <section
      ref={ref}
      className={
        `${className} transition-all duration-1000 ease-out transform ` +
        (inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12 pointer-events-none')
      }
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection; 