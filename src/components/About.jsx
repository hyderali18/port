import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate developer with experience in building modern web applications.
            My journey in software development started with a curiosity about how things work,
            and has evolved into a deep commitment to creating elegant, user-friendly solutions
            that solve real-world problems.
          </p>
          <p>
            Throughout my career, I've worked with diverse teams and technologies, always
            striving to write clean, maintainable code and deliver exceptional user experiences.
            I believe in continuous learning and staying current with the latest industry trends
            and best practices.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge with the developer community. I'm always
            excited to take on new challenges and collaborate on innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
