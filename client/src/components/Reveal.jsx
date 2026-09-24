// Wraps any section/element to fade + slide it in the first time it
// scrolls into view. Used across the site for a consistent, simple
// entrance animation instead of everything animating separately.
//
// Usage:  <Reveal><About /></Reveal>
// Or with a delay (for staggering a row of cards):
//         <Reveal delay={0.1}>...</Reveal>
//
// Respects prefers-reduced-motion automatically — see the global
// override in index.css.

import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node); // only animate in once
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default Reveal;
