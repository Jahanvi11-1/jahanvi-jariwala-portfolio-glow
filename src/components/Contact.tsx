
import React from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <Mail size={24} className="text-portfolio-primary" />
        <h2 className="section-heading text-center">Contact</h2>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me using any of the methods below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Mail size={20} className="text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:jpj.jariwala11@gmail.com" className="text-portfolio-dark hover:text-portfolio-primary transition-colors">
                    jpj.jariwala11@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Phone size={20} className="text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+919898952238" className="text-portfolio-dark hover:text-portfolio-primary transition-colors">
                    +91 989 895 2238
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Linkedin size={20} className="text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-primary transition-colors flex items-center gap-1">
                    View Profile <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-primary/10 p-3 rounded-full">
                  <Github size={20} className="text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-dark hover:text-portfolio-primary transition-colors flex items-center gap-1">
                    View Projects <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">Send Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 focus:border-portfolio-primary/50" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 focus:border-portfolio-primary/50" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-primary/50 focus:border-portfolio-primary/50" 
                  placeholder="Your Message" 
                  required 
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full justify-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
