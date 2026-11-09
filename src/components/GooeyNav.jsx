'use client';

import { useState, useRef, useEffect, useCallback } from "react";
import "./GooeyNav.css";

export default function GooeyNav({ items = [], className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [droplets, setDroplets] = useState([]);
  const trackRef = useRef(null);
  const prevLeftRef = useRef(0);

  const updatePill = useCallback((index) => {
    if (!trackRef.current) return;
    const itemsElements = trackRef.current.querySelectorAll(".gooey-nav-item");
    const targetItem = itemsElements[index];
    if (!targetItem) return;

    const left = targetItem.offsetLeft;
    const width = targetItem.offsetWidth;

    // Generate gooey splash droplets if moving between items
    const prevLeft = prevLeftRef.current;
    if (prevLeft !== 0 && prevLeft !== left) {
      const distance = left - prevLeft;
      const count = 5;
      const newDroplets = [];
      for (let i = 0; i < count; i++) {
        const progress = (i + 1) / (count + 1);
        const dropletX = prevLeft + distance * progress + (Math.random() - 0.5) * 12;
        const dropletY = 14 + (Math.random() - 0.5) * 10;
        const size = 6 + Math.random() * 8;
        newDroplets.push({
          id: Math.random(),
          x: dropletX,
          y: dropletY,
          size,
        });
      }
      setDroplets(newDroplets);
      setTimeout(() => setDroplets([]), 400);
    }

    prevLeftRef.current = left;
    setPillStyle({ left, width });
  }, []);

  useEffect(() => {
    updatePill(activeIndex);
  }, [activeIndex, updatePill]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => updatePill(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, updatePill]);

  // Sync with scroll position to highlight current active section
  useEffect(() => {
    const sectionIds = items.map((item) => item.href.replace("#", "")).filter(Boolean);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (e, index, href) => {
    setActiveIndex(index);
    if (href.startsWith("#")) {
      const target = document.getElementById(href.replace("#", ""));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={`gooey-nav-wrapper ${className}`}>
      {/* SVG Gooey Filter */}
      <svg className="gooey-filter-svg" aria-hidden="true">
        <defs>
          <filter id="gooey-nav-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <nav className="gooey-nav" aria-label="Main Navigation">
        <ul ref={trackRef} className="gooey-nav-track">
          {/* Gooey Liquid Background Layer */}
          <div className="gooey-liquid-layer">
            <div
              className="gooey-pill"
              style={{
                transform: `translateX(${pillStyle.left}px)`,
                width: `${pillStyle.width}px`,
              }}
            />
            {droplets.map((d) => (
              <span
                key={d.id}
                className="gooey-droplet"
                style={{
                  left: `${d.x}px`,
                  top: `${d.y}px`,
                  width: `${d.size}px`,
                  height: `${d.size}px`,
                }}
              />
            ))}
          </div>

          {/* Navigation Links */}
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <li
                key={item.href}
                className={`gooey-nav-item ${isActive ? "active" : ""}`}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, index, item.href)}
                  className="gooey-nav-link"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

