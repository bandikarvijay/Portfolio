// src/components/Sections/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Home.css';
import PixelTransition from './PixelTransition/PixelTransition';

const Home = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="home-section"
  >
    <div className="home-content">
      {/* LEFT SIDE TEXT */}
      <div className="home-left">
        <h2 className="friend-title">Hello, I'm <br /> B V Vijaya Bhaskar</h2>
        <p className="friend-subtitle">
          MERN Stack Developer<br />
          Passionate about building scalable, intuitive full-stack web applications that deliver seamless user experiences.
        </p>

        <div className="icons">
        <a href="https://github.com/bandikarvijay">
          <FaGithub className="icon" />
          </a>
        <a href="https://www.linkedin.com/in/b-v-vijaya-bhaskar-2a50592b4/" >
          <FaLinkedin className="icon" />
          </a>
        <a href="mailto:bandikar.v.vijay@gmail.com">
          <FaEnvelope className="icon" />
          </a>
        </div>

<div className="button-group">
<a
  href="./B_V_Vijaya_Bhaskar_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn"
>
  View Resume
</a>
  <button
    className="btn"
    onClick={() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    Let's Connect
  </button>
</div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="home-right">
        <div className="circle-image">
<PixelTransition
  firstContent={
    <img
      src="./pic.png"
      alt="default pixel transition content, a cat!"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ff6600" }}>Vijay!</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>        </div>
      </div>
    </div>
  </motion.section>
);

export default Home;
