import React from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';
import Research from '../components/Research/Research';
import Contact from '../components/Contact/Contact';
import Publications from '../components/Publications/Publications';
import Updates from '../components/Updates/Updates';

const HomePage = () => {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5 
      }
    }
  };

  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>Muhtasim Haque Nahian</motion.h1>
          <motion.p variants={itemVariants}>Research Assistant & Water Resources Engineer</motion.p>
          <motion.button 
            className="cta-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
          >
            View My Research
          </motion.button>
          <motion.div
            className="typed-container"
            variants={itemVariants}
          >
            <p className="typed-text">
              Specialized in <span className="highlight">Hydrodynamic Modeling</span>, 
              <span className="highlight"> Geospatial Analysis</span> & 
              <span className="highlight"> Climate Data Analysis</span>
            </p>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={() => scrollToSection('about')}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-arrow"></span>
            <span className="scroll-arrow"></span>
            <span className="scroll-arrow"></span>
          </div>
        </motion.div>
      </section>
      
      <About />
      <Education />
      <Skills />
      <Research />
      <Publications />
      <Updates />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
