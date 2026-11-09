'use client';

import { useRef, useState, useEffect } from 'react';

/**
 * FadeContent component from React Bits
 * Provides smooth blur and opacity reveal transitions as elements enter viewport
 */
export default function FadeContent({
  children,
  blur = true,
  duration = 800,
  delay = 0,
  threshold = 0.15,
  initialOpacity = 0,
  className = '',
  style = {},
  displacement = 24,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : initialOpacity,
        filter: isVisible ? 'blur(0px)' : blur ? 'blur(12px)' : 'none',
        transform: isVisible
          ? 'translateY(0px) scale(1)'
          : `translateY(${displacement}px) scale(0.98)`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, filter, transform',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

