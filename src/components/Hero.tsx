
import React from 'react';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gradient-bg pt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn opacity-0" style={{animationDelay: '0.1s'}}>
          Jahanvi Jariwala
        </h1>
        <h2 className="text-xl md:text-3xl text-gray-700 mb-8 animate-fadeIn opacity-0" style={{animationDelay: '0.3s'}}>
          B.Sc. Computer Science Student & UI/UX Enthusiast
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-fadeIn opacity-0" style={{animationDelay: '0.5s'}}>
          Transforming ideas into elegant, functional digital experiences.
          Building the future with code, design, and passion.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fadeIn opacity-0" style={{animationDelay: '0.7s'}}>
          <a href="#about" className="btn-primary">
            Explore My Work <ArrowRight size={16} />
          </a>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-portfolio-primary hover:text-portfolio-secondary"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-portfolio-primary hover:text-portfolio-secondary"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
