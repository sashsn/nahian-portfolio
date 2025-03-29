import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science (B.Sc.) in Water Resources Engineering',
      institution: 'Bangladesh University of Engineering & Technology (BUET)',
      period: '2020 - 2024',
      description: 'Graduated with a focus on water resources engineering. Successfully defended undergraduate thesis on "Rain-on-grid Modeling of Bagerhat Paurashava using HEC-RAS 2D."'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Education</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-degree">{item.degree}</h3>
                <h4 className="timeline-institution">{item.institution}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="education-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Additional Training & Certifications</h3>
          <ul className="certification-list">
            <li>Advanced Training in Hydrodynamic Modeling with HEC-RAS</li>
            <li>Certification in ArcGIS and QGIS for Water Resources Applications</li>
            <li>Python Programming for Climate Data Analysis</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
