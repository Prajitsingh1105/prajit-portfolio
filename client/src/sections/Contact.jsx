import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-[120px] min-h-[700px] flex flex-col justify-center items-center text-center reveal">
      <p className="font-mono text-primary mb-4 tracking-widest uppercase text-sm">05. What's Next?</p>
      <h2 className="text-[40px] md:text-5xl font-extrabold text-on-surface mb-6 font-display">Get In Touch</h2>
      <p className="text-lg text-secondary max-w-lg mb-12 leading-relaxed">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      
      <form className="glass-card p-8 rounded-xl w-full max-w-md flex flex-col gap-4 text-left">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Your Name" 
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-secondary/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Your Email" 
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-secondary/50"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            placeholder="Your Message" 
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-secondary/50 resize-none"
          ></textarea>
        </div>
        <button 
          type="button" 
          className="mt-4 w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-primary/90 hover:scale-[1.02] transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;