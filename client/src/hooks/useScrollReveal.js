import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    let reveals = [];
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;
      
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        }
      });
    };
    
    const initReveal = () => {
      reveals = document.querySelectorAll(".reveal");
      revealOnScroll();
    };
    
    // Ensure the DOM has updated for the new route
    const timer = setTimeout(initReveal, 50);

    window.addEventListener("scroll", revealOnScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, [location.pathname]);
};