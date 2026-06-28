import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-[120px] flex flex-col justify-center reveal">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-on-surface whitespace-nowrap">
          <span className="text-primary font-mono mr-2 text-2xl">01.</span> About Me
        </h2>
        <div className="h-px bg-white/10 w-full max-w-xs"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 flex flex-col gap-6 text-lg text-secondary leading-relaxed">
          <p>
            Hello! My name is Prajit and I enjoy creating things that live on the internet. My interest in web development started back in college when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about layout and interactive design!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working on a variety of projects, from high-performance C++ backend constraints to full-scale MERN stack dashboards. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <div className="mt-4">
            <p className="font-bold text-on-surface mb-4">Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 text-base">
              {['JavaScript (ES6+)', 'React.js', 'Node.js / Express', 'MongoDB', 'C++ / Algorithms', 'Tailwind CSS'].map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-primary text-xs">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-2 relative group">
          <div className="relative z-10 glass-card rounded-xl overflow-hidden aspect-[3/4] max-w-sm mx-auto group-hover:-translate-y-2 group-hover:-translate-x-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-20 group-hover:bg-transparent transition-colors duration-300"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmni944qZvt55mRcGl9P55ySn5CDCqtegbDaNtmBvFDn2NPBxmtp2xO3znqR-TLjsjKexGDQfQr2OdmaaqVPLt6DahkrCRLInuxjhtnxATyaP-HGIWGqegqdc9FQZwLx9BbXsn7moOqiY7Smi7SKp3LdMcs72x1TsWSgyoUvC6xGsCdxPU7CmVHUyW8pPbIILRbNgj4rzfK_LuWrwUCoD0g3J5glT0I5iA5oUeouaBRCL6A6vDNNFSveupPP0mp1uR1asaSvwaabvC" 
              alt="Aman Singh" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="absolute inset-0 border-2 border-primary rounded-xl max-w-sm mx-auto translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;