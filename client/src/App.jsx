import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout Imports
import Navbar from './components/layout/Navbar';
import SidebarLeft from './components/layout/SidebarLeft';
import SidebarRight from './components/layout/SidebarRight';
import Footer from './components/layout/Footer';

// Page Imports
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import TimelinePage from './pages/TimelinePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Initialize the scroll reveal animations globally
  useScrollReveal();

  return (
    <div className="relative scroll-smooth">
      <Navbar />
      <SidebarLeft />
      <SidebarRight />
      
      <main className="max-w-[1140px] mx-auto px-6 md:px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;