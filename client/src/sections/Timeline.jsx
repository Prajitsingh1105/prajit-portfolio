import React from 'react';
import { timelineData } from '../data/content';

const Timeline = () => {
  return (
    <section id="timeline" className="py-[120px] reveal">
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-px bg-white/10 w-16 hidden md:block"></div>
        <h2 className="text-3xl font-bold text-on-surface whitespace-nowrap text-center">
          <span className="text-primary font-mono mr-2 text-2xl">03.</span> Experience & Journey
        </h2>
        <div className="h-px bg-white/10 w-16 hidden md:block"></div>
      </div>
      <div className="relative w-full max-w-3xl mx-auto timeline-line py-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-12 last:mb-0">
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,76,96,0.6)]"></div>
            
            <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-8 md:text-right group-odd:md:pl-8 group-odd:md:pr-0 group-odd:md:text-left">
              <div className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors text-left md:text-inherit">
                <span className="font-mono text-primary text-sm mb-2 block">{item.year}</span>
                <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;