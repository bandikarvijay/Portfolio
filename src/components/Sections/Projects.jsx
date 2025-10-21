// src/components/Sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css';

const project1Images = [
  '/pd1.png',
  '/pd2.png',
  '/pd3.png',
  '/pd4.png'
];

const project2Images = [
  '/swipe1.png',
  '/swipe2.png',
  '/swipe3.png',
  '/swipe4.png'
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
    arrows: false
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="projects-section"
    >
      <h1 className="title">Projects</h1>

      {/* Project 1 */}
      <div className="project-box">
        <Slider {...settings} className="carousel">
          {project1Images.map((src, idx) => (
            <div key={idx} className="carousel-image-wrapper">
              <img src={src} alt={`Project 1 Screenshot ${idx + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>

        <div className="project-details">
          <h2>Project Drop</h2>
          <p>
            Project Drop is a full-featured web app that lets users upload and explore categorized projects
            (Web, Data, Mobile), view thumbnails, preview code files, and download projects.
          </p>
          <p><strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, JWT, Firebase Storage</p>

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

      {/* Project 2 */}
      <div className="project-box">
        <Slider {...settings} className="carousel">
          {project2Images.map((src, idx) => (
            <div key={idx} className="carousel-image-wrapper">
              <img src={src} alt={`Project 2 Screenshot ${idx + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>

        <div className="project-details">
          <h2>Swipe Mood</h2>
          <p>
SwipeMood is a collaborative music-listening platform that lets friends create or join rooms, add YouTube songs, and listen together in perfect sync — all in real-time.
          </p>
          <p><strong>Tech Stack:</strong> React.js, Axios, Tailwind / Custom CSS,
          Node.js, Express.js, Socket.io, MongoDB, Mongoose</p>

          <div className="project-buttons">
            <a href="http://swipemood-sage.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="project-btn">Live Demo</button>
            </a>
            <a href="https://github.com/bandikarvijay/swipemood" target="_blank" rel="noopener noreferrer">
              <button className="project-btn">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
