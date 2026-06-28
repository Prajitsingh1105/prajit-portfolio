import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c0f10] w-full rounded-t-xl border-t border-white/5 flex flex-col md:flex-row justify-between items-center py-6 px-6 max-w-[1140px] mx-auto mt-24 mb-4 md:mb-0 relative z-50">
      <a href="#home" className="font-display text-2xl font-bold text-primary mb-4 md:mb-0 opacity-80 hover:opacity-100 transition-opacity">
        &lt;Prajit /&gt;
      </a>
      
      {/* Mobile Social Links */}
      <div className="flex gap-6 md:hidden mb-4">
        <a href="#" className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>code</span></a>
        <a href="#" className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>account_circle</span></a>
        <a href="#" className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>mail</span></a>
      </div>
      
      <div className="text-center md:text-left">
        <p className="text-sm text-on-surface-variant">© 2026 Prajit Kumar Singh. Built with passion.</p>
      </div>
      
      <div className="flex gap-4 mt-4 md:mt-0 text-sm">
        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;