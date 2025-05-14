
import React from 'react';
import { ArrowDownCircle, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-soft dark:bg-gradient-skyblue opacity-30"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-portfolio-accent rounded-full filter blur-3xl opacity-30 dark:bg-portfolio-skyblue dark:opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-portfolio-skyblue rounded-full filter blur-3xl opacity-30 dark:bg-portfolio-accent dark:opacity-20"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fadeIn">
            <h2 className="text-xl md:text-2xl font-medium text-portfolio-skyblue dark:text-portfolio-accent mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-portfolio-dark dark:text-white">
              <span className="block">Jahanvi Jariwala</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-8">
              B.Sc. Computer Science Student
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <Button className="btn-primary">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </Button>
            <Button className="btn-primary">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
            </Button>
          </div>

          <a 
            href="#about" 
            className="animate-float mt-12 text-portfolio-skyblue dark:text-portfolio-accent hover:text-portfolio-darkBlue dark:hover:text-portfolio-mint transition-colors"
          >
            <ArrowDownCircle size={36} />
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
