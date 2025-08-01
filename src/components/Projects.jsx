import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "College Infrastructure Management System",
      role: "UI/UX Designer",
      description: "Designed a comprehensive system to manage college infrastructure including classrooms, laboratories, and equipment. Created intuitive user interfaces focusing on ease of use for administrators and faculty.",
      technologies: ["Figma", "Adobe XD", "UI/UX", "Wireframing"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#"
    },
    {
      title: "E-Commerce Website",
      role: "Frontend Developer",
      description: "Developed a responsive e-commerce platform with product catalog, shopping cart, and user authentication features. Implemented clean UI with seamless navigation experience.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "#"
    },
    {
      title: "Student Performance Analytics Dashboard",
      role: "Full Stack Developer",
      description: "Built a data visualization dashboard for tracking and analyzing student performance metrics. Includes filtering, sorting, and personalized student reports.",
      technologies: ["Python", "SQL", "Data Visualization", "Backend Development"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-container bg-gradient-to-br from-white to-portfolio-mint/30">
      <div className="flex items-center gap-2 mb-12 justify-center">
        <Briefcase size={28} className="text-portfolio-primary" />
        <h2 className="section-heading text-center">Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card group"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white flex items-center gap-2 text-sm font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="text-sm text-portfolio-primary font-medium mb-1">{project.role}</div>
              <h3 className="text-lg font-semibold text-portfolio-dark mb-3">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-5 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-portfolio-lavender text-portfolio-secondary text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;