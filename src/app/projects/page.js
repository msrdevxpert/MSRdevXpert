'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css';

const projects = [
  {
    title: 'Vision Green RKR',
    description:
      'A clean, modern website for Vision Green RKR, showcasing their eco-friendly waste management solutions and community initiatives.',
    image: '/RKR.png',
    link: 'https://visiongreenrkr.com/',
  },
  {
    title: 'Oxynet Telecommunications Pvt. Ltd.',
    description:
      'A professional broadband service website with dynamic service plans, contact integration, and customer-first UI/UX.',
    image: '/oxyHome.png',
    link: 'https://oxynet.co.in/',
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects-section">
      <div className="orange-ball"></div>

      <div className="container" data-aos="fade-up">
        <h1>
          <span>Our</span> Projects
        </h1>
        <p className="section-subtitle">
          Explore the impactful digital solutions we've crafted for our valued
          clients.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              data-aos="zoom-in"
            >
              <img
                src={project.image}
                alt={project.title}
                className="card-circle-img"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
