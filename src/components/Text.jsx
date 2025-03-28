import React, { useState, useEffect } from "react";
import "../styles/TextStack.css";

const TextStack = () => {
  const [fontSize, setFontSize] = useState(getInitialFontSize);

  useEffect(() => {
    const handleResize = () => setFontSize(getInitialFontSize());
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setFontSize(
          Math.max(getMinFontSize(), getInitialFontSize() - window.scrollY / 50)
        );
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getInitialFontSize() {
    if (window.innerWidth < 480) return 3.5; // Mobile
    if (window.innerWidth < 768) return 5; // Tablet
    return 8; // Desktop
  }

  function getMinFontSize() {
    return window.innerWidth < 768 ? 1.5 : 2.5;
  }

  return (
    <div className="text-container">
      <div className="stack" style={{ "--stacks": 3 }}>
        {[...Array(3)].map((_, index) => (
          <span
            key={index}
            style={{ "--index": index, fontSize: `${fontSize}rem` }}
          >
            VIVEK TIGADI
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextStack;
