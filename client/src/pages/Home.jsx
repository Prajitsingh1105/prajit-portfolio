import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Portfolio from '../sections/Portfolio';
import Timeline from '../sections/Timeline';
import Blog from '../sections/Blog';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Portfolio limit={2} />
      <Timeline />
      <Blog limit={2} />
    </>
  );
};

export default Home;
