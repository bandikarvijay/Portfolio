// src/components/Sections/Skills.jsx
import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiMysql, SiVercel, SiRender } from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <SiMysql />, name: 'SQL' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <SiVercel />, name: 'Vercel' },
  { icon: <SiRender />, name: 'Render' },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
