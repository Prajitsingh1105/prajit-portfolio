import React, { useEffect } from 'react';
import Contact from '../sections/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col justify-center">
      <Contact />
    </div>
  );
};

export default ContactPage;
