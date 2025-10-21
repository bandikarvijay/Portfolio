import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      {/* Left side: Contact Form */}
      <div className="contact-left">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to collaborate? I’d love to hear from you.</p>
        <form
          className="contact-form"
          action="https://formspree.io/f/mzzvkdgz" // ✅ Replace with your actual Formspree form ID
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Right side: Social Links */}
      <div className="contact-right">
        <h2>Connect with me</h2>
        <div className="contact-icons">
          <a href="mailto:bandikar.v.vijay@gmail.com" className="icon-box" target="_blank" rel="noreferrer">
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>
          <a href="https://github.com/bandikarvijay" className="icon-box" target="_blank" rel="noreferrer">
            <FaGithub className="icon" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/b-v-vijaya-bhaskar-2a50592b4/" className="icon-box" target="_blank" rel="noreferrer">
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>
          <a href="./B_V_VIJAYA_BHASKAR.pdf" className="icon-box" target="_blank" rel="noreferrer">
            <FaFileAlt className="icon" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
