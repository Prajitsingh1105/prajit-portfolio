import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { label: 'home', path: '/' },
    { label: 'projects', path: '/projects' },
    { label: 'timeline', path: '/timeline' },
    { label: 'blogs', path: '/blog' }
  ];

  const getIsActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-7xl bg-background/80 backdrop-blur-md border-b border-white/10 z-50 hidden md:flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto left-1/2 -translate-x-1/2">
      <Link to="/" className="font-display text-2xl font-bold text-on-surface hover:text-primary transition-colors">&lt;Prajit /&gt;</Link>
      
      <div className="flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link 
            key={link.label}
            to={link.path}
            className={`capitalize transition-colors ${
              getIsActive(link.path)
                ? 'text-primary font-bold border-b-2 border-primary pb-1' 
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      
      <Link to="/contact" className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
        Let's Talk
      </Link>
    </nav>
  );
};

export default Navbar;