import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-placeholder">
              {/* Replace with Nahian's image */}
              <div className="placeholder-text">Muhtasim H. Nahian</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Professional Background</h3>
            <p>
              I am a Research Assistant at the Department of Water Resources Engineering, Bangladesh University 
              of Engineering & Technology (BUET). My work focuses on urban drainage and green infrastructure modeling. 
              I am currently involved in the Integrated Drainage Plan and Detailed Design Services under the Coastal 
              Towns Climate Resilience Project, authorized by the Ministry of Local Government, Rural Development, 
              and Co-operatives of Bangladesh and funded by the Asian Development Bank.
            </p>
            
            <h3>Research Focus</h3>
            <p>
              My research interests include hydrodynamic and hydrologic modeling, geospatial analysis, and 
              climate data analysis. I work with various water modeling tools and apply programming and 
              geospatial analysis to solve complex water resource challenges.
            </p>
            
            <div className="about-stats">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Research Experience</span>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">5+</span>
                <span className="stat-label">Research Projects</span>
              </motion.div>
              
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="stat-number">3+</span>
                <span className="stat-label">Publications</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
