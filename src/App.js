import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import './App.css';
import TargetCursor from './TargetCursor/TargetCursor'; // 🌀 Your animated cursor

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* 🌀 Custom Cursor effect applied globally */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      {/* 🔝 Navigation */}
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* 📌 Page Sections */}
      <section ref={homeRef}>
        <Home />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
