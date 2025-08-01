import React from 'react';
import { BookOpen } from 'lucide-react';
const Education = () => {
  return <section id="education" className="section-container bg-gray-50">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <BookOpen size={24} className="text-portfolio-primary" />
        <h2 className="section-heading text-center text-slate-700">Education</h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-portfolio-primary"></div>
          
          {/* Education Item 1 */}
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 md:text-right">
                <h3 className="text-xl font-semibold text-portfolio-dark">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-500">2021 - Present</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-portfolio-primary"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-medium text-portfolio-secondary">University Name</h4>
                  <p className="text-gray-700 mt-2">Focusing on advanced programming concepts, data structures, algorithms, and database systems. Participated in various coding competitions and technical workshops.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-portfolio-accent text-portfolio-dark text-xs px-2 py-1 rounded">GPA: 3.8/4.0</span>
                    <span className="bg-portfolio-accent text-portfolio-dark text-xs px-2 py-1 rounded">Dean's List</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Item 2 */}
          <div className="relative mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 md:text-right order-1 md:order-1">
                <h3 className="text-xl font-semibold text-portfolio-dark">High School Diploma</h3>
                <p className="text-gray-500">2018 - 2020</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-portfolio-primary"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-8 order-2 md:order-2">
                <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-medium text-portfolio-secondary">High School Name</h4>
                  <p className="text-gray-700 mt-2">Specialized in science and mathematics with additional courses in computer applications. Participated in science fairs and tech competitions.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="bg-portfolio-accent text-portfolio-dark text-xs px-2 py-1 rounded">Graduated with Honors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Item 3 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8 md:text-right">
                <h3 className="text-xl font-semibold text-portfolio-dark">Online Certifications</h3>
                <p className="text-gray-500">2020 - Present</p>
              </div>
              
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4">
                <div className="w-6 h-6 rounded-full bg-white border-4 border-portfolio-primary"></div>
              </div>
              
              <div className="md:w-1/2 md:pl-8">
                <div className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
                  <h4 className="font-medium text-portfolio-secondary">Various Platforms</h4>
                  <p className="text-gray-700 mt-2">Continuously expanding knowledge through specialized courses in UI/UX design, web development, and software engineering principles from platforms like Coursera and Udemy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Education;