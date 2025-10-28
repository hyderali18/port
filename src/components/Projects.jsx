import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration using modern web technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates, team workspaces, and drag-and-drop functionality for organizing projects.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current conditions and forecasts using external APIs with beautiful data visualizations.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API", "Chart.js"],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "Social Media Analytics",
      description: "An analytics dashboard for tracking social media metrics across multiple platforms with customizable reports and insights.",
      technologies: ["React", "TypeScript", "D3.js", "Express"],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "Portfolio CMS",
      description: "A content management system specifically designed for creative portfolios with an intuitive admin panel and responsive frontend.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      githubLink: "#",
      liveDemoLink: "#"
    },
    {
      title: "Fitness Tracker",
      description: "A mobile-responsive fitness tracking application with workout logging, progress charts, and personalized goal setting features.",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
      githubLink: "#",
      liveDemoLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>My Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} className="project-link">GitHub</a>
                <a href={project.liveDemoLink} className="project-link">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
