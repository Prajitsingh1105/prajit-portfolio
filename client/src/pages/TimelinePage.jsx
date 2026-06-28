import React, { useEffect } from 'react';
import Timeline from '../sections/Timeline';

const TimelinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Timeline />
    </div>
  );
};

export default TimelinePage;
