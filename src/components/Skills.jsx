import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "Git",
    "MongoDB",
    "Express",
    "TypeScript",
    "REST APIs",
    "Responsive Design",
    "Redux",
    "PostgreSQL"
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-badge">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
