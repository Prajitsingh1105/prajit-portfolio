import React from 'react';
import { Code, User, Share2 } from 'lucide-react';

const SidebarLeft = () => {
  const handleShare = async (e) => {
    e.preventDefault(); 
    
    const shareData = {
      title: 'Aman Singh | Web Developer',
      text: 'Check out the portfolio of Aman Singh, a Full-Stack Web Developer & UI Designer.',
      url: window.location.origin,
    };

    try {
     
      if (navigator.share) {
        await navigator.share(shareData);
      } 
      
      else {
        await navigator.clipboard.writeText(window.location.origin);
        alert('Portfolio link copied to clipboard! 🚀');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="hidden md:flex fixed left-0 top-0 h-screen flex-col justify-end items-center pb-8 px-4 z-40 w-[80px]">
      <div className="flex flex-col gap-6 items-center">
        
        <a href="https://github.com/Prajitsingh1105" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300">
          <Code size={24} strokeWidth={2} />
        </a>
        
        <a href="https://www.linkedin.com/in/prajit-kumar-singh-681a69327/" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300">
          <User size={24} strokeWidth={2} />
        </a>
        
        {/* X (Twitter) Icon */}
        <a href="https://x.com/PrajitSingh1105" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300" title="X (Twitter)">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* Hashnode Icon */}
        <a href="https://prajit-dev.hashnode.dev/" target="_blank" rel="noreferrer" className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300" title="Hashnode">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"/>
          </svg>
        </a>
        
        <button onClick={handleShare} className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer" title="Share Portfolio">
          <Share2 size={24} strokeWidth={2} />
        </button>

        <div className="w-px h-24 bg-white/20 mt-4"></div>
      </div>
    </div>
  );
};

export default SidebarLeft;