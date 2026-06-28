import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle active navigation state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'about', 'portfolio', 'timeline', 'blog'];

  return (
    <nav className="fixed top-0 w-7xl bg-background/80 backdrop-blur-md border-b border-white/10 z-50 hidden md:flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto left-1/2 -translate-x-1/2">
      <a href="#home" className="font-display text-2xl font-bold text-on-surface hover:text-primary transition-colors">&lt;/Prajit&gt;</a>
      
      <div className="flex gap-6 items-center">
        {navLinks.map((link) => (
          <a 
            key={link}
            href={`#${link}`}
            className={`capitalize transition-colors ${
              activeSection === link 
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {link}
          </a>
        ))}
      </div>
      
      <a href="#contact" className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;