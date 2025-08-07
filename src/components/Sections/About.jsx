// src/components/Sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.section
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', minHeight: '100vh', padding: '0 16px' }}
  >
    <h1 className="title">About Me</h1>
    <p className="subtitle">
      I'm a passionate <strong>MERN Stack Developer</strong> with experience in MongoDB, Express.js, React.js, and Node.js.
    </p>
    <p className="subtitle">
      I'm skilled with UI tools like <strong>CSS</strong> and confident deploying projects using <strong>Vercel</strong> and <strong>Render</strong>. I use <strong>Git</strong> and <strong>GitHub</strong> daily for version control and collaboration.
    </p>
    <p className="subtitle">
      Solving real-world problems with code and constantly explore new technologies. I'm currently looking for opportunities where I can grow and contribute to innovative teams that value creativity and modern development practices.
    </p>
  </motion.section>
);

export default About;
