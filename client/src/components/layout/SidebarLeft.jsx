import React from 'react';
import { Code, User, Share2 } from 'lucide-react'; // Import the icons you need

const SidebarLeft = () => {
  return (
    <div className="hidden md:flex fixed left-0 top-0 h-screen flex-col justify-end items-center pb-8 px-4 z-40 w-[100px]">
      <div className="flex flex-col gap-6 items-center">
        
        <a href="#" className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300">
          <Code size={24} strokeWidth={2} />
        </a>
        
        <a href="#" className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300">
          <User size={24} strokeWidth={2} />
        </a>
        
        <a href="#" className="text-secondary hover:text-primary hover:scale-110 transition-all duration-300">
          <Share2 size={24} strokeWidth={2} />
        </a>

        <div className="w-px h-60 bg-white/20 mt-4"></div>
      </div>
    </div>
  );
};

export default SidebarLeft;