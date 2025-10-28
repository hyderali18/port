import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Your Name</h1>
        <p className="hero-tagline">Full Stack Developer | Designer | Problem Solver</p>
        <p className="hero-description">Building elegant solutions to complex problems</p>
        <button className="hero-cta" onClick={scrollToProjects}>
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
