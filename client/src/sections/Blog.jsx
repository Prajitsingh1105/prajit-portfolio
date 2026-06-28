import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/content';

const Blog = ({ limit }) => {
  const displayedBlogs = limit ? blogData.slice(0, limit) : blogData;

  return (
    <section id="blog" className="py-[120px] reveal">
      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="h-px bg-white/10 w-16 hidden md:block"></div>
        <h2 className="text-3xl font-bold text-on-surface whitespace-nowrap text-center">
          <span className="text-primary font-mono mr-2 text-2xl">04.</span> Blog
        </h2>
        <div className="h-px bg-white/10 w-16 hidden md:block"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedBlogs.map((post) => (
          <div key={post.id} className="glass-card p-8 rounded-xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-primary text-sm">{post.date}</span>
              <span className="text-secondary text-xs bg-white/5 px-2 py-1 rounded">{post.readTime}</span>
            </div>
            <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-secondary mb-6 flex-grow">{post.summary}</p>
            <div>
              <a href={post.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Read Article <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div className="mt-16 flex justify-center">
          <Link to="/blog" className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors font-mono">
            View All Articles
          </Link>
        </div>
      )}
    </section>
  );
};

export default Blog;