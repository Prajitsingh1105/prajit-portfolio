import React, { useEffect } from 'react';
import Portfolio from '../sections/Portfolio';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Portfolio />
    </div>
  );
};

export default ProjectsPage;
