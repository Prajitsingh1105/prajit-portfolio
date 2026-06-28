import React from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout Imports
import Navbar from './components/layout/Navbar';
import SidebarLeft from './components/layout/SidebarLeft';
import SidebarRight from './components/layout/SidebarRight';
import Footer from './components/layout/Footer';

// Section Imports
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Timeline from './sections/Timeline';
import Blog from './sections/Blog';
import Contact from './sections/Contact';

function App() {
  // Initialize the scroll reveal animations globally
  useScrollReveal();

  return (
    <div className="relative scroll-smooth">
      <Navbar />
      <SidebarLeft />
      <SidebarRight />
      
      <main className="max-w-7xl mx-auto px-6 md:px-0 pt-24 md:pt-0">
        <Hero />
        <About />
        <Portfolio />
        <Timeline />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;