
import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <User size={24} className="text-portfolio-primary" />
            <h2 className="section-heading">About Me</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Hello! I'm Jahanvi Jariwala, a passionate Computer Science student with a keen interest in UI/UX design and software development. My journey in tech began with a fascination for how digital solutions can solve real-world problems.
          </p>
          <p className="text-gray-700 mb-6">
            I combine technical expertise with creative thinking to build user-friendly applications. My background in Computer Science gives me a strong foundation in programming principles, while my UI/UX experience allows me to create interfaces that are both functional and intuitive.
          </p>
          <p className="text-gray-700">
            I'm constantly learning and exploring new technologies to expand my skill set. My goal is to contribute to innovative projects that make a positive impact on users' lives, focusing on creating seamless experiences that delight and inspire.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-portfolio-primary rounded-lg transform translate-x-4 translate-y-4 opacity-20"></div>
            <div className="relative bg-white rounded-lg shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-secondary">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span className="text-gray-700">Currently pursuing B.Sc. in Computer Science</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span className="text-gray-700">Passionate about creating intuitive user experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span className="text-gray-700">Experienced in UI/UX design for educational systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span className="text-gray-700">Strong problem-solving and analytical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-portfolio-primary">•</span>
                  <span className="text-gray-700">Enthusiastic about continuous learning and improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
