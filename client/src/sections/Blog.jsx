import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="py-[120px] reveal">
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-px bg-white/10 w-16 hidden md:block"></div>
        <h2 className="text-3xl font-bold text-on-surface whitespace-nowrap text-center">
          <span className="text-primary font-mono mr-2 text-2xl">04.</span> Blog
        </h2>
        <div className="h-px bg-white/10 w-16 hidden md:block"></div>
      </div>
      <div className="text-center text-lg text-secondary">
        <p>Articles coming soon...</p>
      </div>
    </section>
  );
};

export default Blog;