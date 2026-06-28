import React from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../assets/Resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-[120px] reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div className="order-2 md:order-1 flex flex-col gap-6 items-start">
          <p className="text-sm text-primary tracking-widest uppercase font-bold">Hi There, I am</p>
          <h1 className="font-display text-[40px] md:text-5xl text-on-surface m-0 leading-tight font-extrabold">
            Prajit Kumar Singh. <br />
            <span className="text-primary opacity-90">I build things for the web.</span>
          </h1>
          <p className="text-lg text-secondary max-w-lg mt-4 leading-relaxed">
            Full-Stack Web Developer & UI Designer. I specialize in building exceptional digital experiences that blend technical robustness with compelling visual storytelling.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-white rounded-md font-bold hover:scale-105 transition-transform duration-200"
            >
              View Resume
            </a>
            <Link to="/contact" className="px-8 py-3 border border-primary text-primary rounded-md font-bold hover:bg-primary/10 transition-colors duration-200">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square rounded-full glass-card flex items-center justify-center overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPNtcgkmrXy7ltAhVUewRBahjgV2sUh8_L3CnOIo2H1aFxNKCsGFGl1CGuo6wCI0GvaMb1F60LByvQ2AFxbnCoTIX_3ncFgm2jmDlJVsRlcV36iEneIcCYJ84oqDRU2qoV9s9tF6sqF1h5gFrqPitUSQoQkuHn9B95bKcsXHH3vfhvs57jTd7VtdIX8XwKkyTm1rlj2d4wToachI7SYIeuyYM-SnFXPiZVDcET6GZa6HcfWpvdImUACq_Gu3QztFbKguTl7A7Y0s7G"
              alt="Developer Illustration"
              className="w-full h-full object-cover p-8 mix-blend-screen opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;