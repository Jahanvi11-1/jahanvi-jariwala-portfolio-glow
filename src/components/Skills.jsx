import React from 'react';
import { Settings } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "SQL", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Jira", "Selenium", "Figma", "Canva", "WordPress"]
    },
    {
      category: "Development",
      skills: ["UI/UX Design", "Web Development", "Software Testing", "Database Management"]
    }
  ];
  
  const softSkills = [
    "Communication", "Teamwork", "Time Management", "Problem Solving", 
    "Critical Thinking", "Adaptability", "Attention to Detail"
  ];

  return (
    <section id="skills" className="section-container">
      <div className="flex items-center gap-2 mb-8 justify-center">
        <Settings size={24} className="text-portfolio-primary" />
        <h2 className="section-heading text-center">Skills</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-portfolio-secondary">Technical Skills</h3>
          <div className="space-y-8">
            {technicalSkills.map((skillGroup, index) => (
              <div key={index} className="skill-card">
                <h4 className="text-lg font-medium text-portfolio-dark mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-portfolio-accent text-portfolio-dark px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-portfolio-secondary">Soft Skills</h3>
          <div className="skill-card">
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-portfolio-primary"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skill Levels Visualization */}
          <div className="mt-8 skill-card">
            <h4 className="text-lg font-medium text-portfolio-dark mb-3">Areas of Expertise</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">UI/UX Design</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-portfolio-primary rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Frontend Development</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-portfolio-primary rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Java Programming</span>
                  <span className="text-sm text-gray-500">80%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-portfolio-primary rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Database Management</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-portfolio-primary rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;