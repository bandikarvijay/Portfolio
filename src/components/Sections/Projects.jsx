// src/components/Sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css'; // Make sure to style it

const images = [
  '/pd1.png',
  '/pd2.png',
  '/pd3.png',
  '/pd4.png'
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false // removed left/right arrows
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="projects-section"
    >
      <h1 className="title">Project Drop</h1>
      <div className="project-box">
        <Slider {...settings} className="carousel">
          {images.map((src, idx) => (
            <div key={idx} className="carousel-image-wrapper">
              <img src={src} alt={`Project Screenshot ${idx + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>

        <div className="project-details">
          <h2>MERN Stack Project Sharing Platform</h2>
          <p>
            Project Drop is a full-featured web app that lets users upload and explore categorized projects
            (Web, Data, Mobile), view thumbnails, preview code files, and download projects.
          </p>
          <p><strong>Technologies:</strong> React.js, Node.js, Express.js, MongoDB, JWT, Firebase Storage</p>

          <div className="project-buttons">
            <a href="https://project-drop-bice.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="project-btn">Live Demo</button>
            </a>
            <a href="https://github.com/bandikarvijay/Project-Drop" target="_blank" rel="noopener noreferrer">
              <button className="project-btn">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
