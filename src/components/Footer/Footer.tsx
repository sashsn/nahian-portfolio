import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Muhtasim Haque Nahian
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Research Assistant at Bangladesh University of Engineering & Technology (BUET)
            </motion.p>
          </div>
          
          <div className="footer-section">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Connect
            </motion.h3>
            <motion.div 
              className="social-links"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer">ResearchGate</a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <a href="https://orcid.org" target="_blank" rel="noopener noreferrer">ORCiD</a>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Muhtasim Haque Nahian. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
