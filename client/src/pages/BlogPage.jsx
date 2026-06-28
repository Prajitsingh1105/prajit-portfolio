import React, { useEffect } from 'react';
import Blog from '../sections/Blog';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Blog />
    </div>
  );
};

export default BlogPage;
