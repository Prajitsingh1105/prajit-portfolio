import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Fetches the key from your .env file
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-[120px] min-h-[700px] flex flex-col justify-center items-center text-center reveal">
      <p className="font-mono text-primary mb-4 tracking-widest uppercase text-sm">05. What's Next?</p>
      <h2 className="text-[40px] md:text-5xl font-extrabold text-on-surface mb-6 font-display">Get In Touch</h2>
      <p className="text-lg text-secondary max-w-lg mb-12 leading-relaxed">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      
      <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl w-full max-w-md flex flex-col gap-4 text-left relative">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name" 
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-secondary/50"
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email" 
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-secondary/50"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message" 
            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-secondary/50 resize-none"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={status === 'loading'}
          className={`mt-4 w-full py-3 font-bold rounded-md transition-all ${
            status === 'success' ? 'bg-green-500 text-white' : 
            status === 'error' ? 'bg-red-500 text-white' : 
            'bg-primary text-white hover:bg-primary/90 hover:scale-[1.02]'
          } disabled:opacity-70 disabled:hover:scale-100`}
        >
          {status === 'loading' ? 'Sending...' : 
           status === 'success' ? 'Message Sent!' : 
           status === 'error' ? 'Failed - Try Again' : 
           'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;