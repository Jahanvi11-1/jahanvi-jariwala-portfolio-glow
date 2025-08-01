import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "UI/UX Design Fundamentals",
      provider: "Coursera",
      date: "July 2023",
      description: "Comprehensive course covering user research, wireframing, prototyping, and usability testing principles."
    },
    {
      title: "Java Programming Masterclass",
      provider: "Udemy",
      date: "March 2023",
      description: "Advanced Java programming concepts including multithreading, collections, and design patterns."
    },
    {
      title: "Web Development Bootcamp",
      provider: "Udemy",
      date: "November 2022",
      description: "Full-stack web development including HTML, CSS, JavaScript, and responsive design principles."
    }
  ];

  const workshops = [
    {
      title: "Design Thinking Workshop",
      organizer: "Design Community",
      date: "September 2023",
      description: "Collaborative workshop on applying design thinking to solve complex problems."
    },
    {
      title: "Agile Development Practices",
      organizer: "Tech Conference",
      date: "May 2023",
      description: "Hands-on workshop on implementing agile methodologies in software development projects."
    }
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <Award size={24} className="text-portfolio-primary" />
        <h2 className="section-heading text-center">Certifications & Workshops</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-portfolio-secondary">Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <h4 className="text-portfolio-dark font-medium">{cert.title}</h4>
                  <span className="bg-portfolio-accent text-xs px-2 py-1 rounded text-portfolio-dark">{cert.date}</span>
                </div>
                <p className="text-sm text-portfolio-secondary mt-1">{cert.provider}</p>
                <p className="text-gray-600 text-sm mt-3">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Workshops */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-portfolio-secondary">Workshops</h3>
          <div className="space-y-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <h4 className="text-portfolio-dark font-medium">{workshop.title}</h4>
                  <span className="bg-portfolio-accent text-xs px-2 py-1 rounded text-portfolio-dark">{workshop.date}</span>
                </div>
                <p className="text-sm text-portfolio-secondary mt-1">{workshop.organizer}</p>
                <p className="text-gray-600 text-sm mt-3">{workshop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;