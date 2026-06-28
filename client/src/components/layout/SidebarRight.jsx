import React from 'react';

const SidebarRight = () => {
  return (
    <div className="hidden md:flex fixed right-0 top-0 h-screen flex-col justify-end items-center pb-8 px-4 z-40 w-[100px]">
      <div className="flex flex-col items-center gap-4">
        <a 
          href="mailto:aman@example.com" 
          className="text-secondary hover:text-primary transition-colors" 
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '14px', letterSpacing: '0.1em' }}
        >
          prajitsingh05@gmail.com
        </a>
        <div className="w-px h-60 bg-white/20 mt-4"></div>
      </div>
    </div>
  );
};

export default SidebarRight;