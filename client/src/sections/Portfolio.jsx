import React from 'react';
import { projectsData } from '../data/content';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-[120px] reveal">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold text-on-surface whitespace-nowrap">
          <span className="text-primary font-mono mr-2 text-2xl">02.</span> Selected Works
        </h2>
        <div className="h-px bg-white/10 w-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <p className="font-mono text-primary text-sm">Featured Project</p>
                <div className="flex gap-3">
                  <a href={project.links.github} className="text-secondary hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">code</span>
                  </a>
                  <a href={project.links.live} className="text-secondary hover:text-primary">
                    <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-4">{project.title}</h3>
              <p className="text-base text-secondary mb-6 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;