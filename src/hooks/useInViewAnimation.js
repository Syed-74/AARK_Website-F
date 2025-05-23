import { useEffect, useRef, useState } from 'react';

export default function useInViewAnimation({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold, rootMargin }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
} 