import React from 'react';
import { motion } from 'framer-motion';
import './Publications.css';

const Publications = () => {
  const publications = [
    {
      title: 'Above-ground Biomass Prediction using Remote Sensing Data',
      conference: 'International Conference on Water and Flood Management (ICWFM)',
      year: '2025',
      description: 'A novel approach to biomass prediction using multispectral satellite imagery and machine learning techniques for improved environmental monitoring.',
      link: '#'
    },
    {
      title: 'A Flood Prediction Model using HEC-HMS for Early Warning Systems',
      conference: 'International Conference on Civil Engineering for Sustainable Development (ICCESD)',
      year: '2024',
      description: 'Development and validation of a hydrological model for flood forecasting in Bangladesh river basins.',
      link: '#'
    },
    {
      title: 'Urban Drainage Modeling in Coastal Areas Under Climate Change Scenarios',
      conference: 'Journal of Water Resources Planning and Management',
      year: '2024',
      description: 'Assessment of drainage infrastructure performance under various climate change projections for coastal towns in Bangladesh.',
      link: '#'
    }
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="publications-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Publications</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="publications-list">
          {publications.map((pub, index) => (
            <motion.div 
              key={index} 
              className="publication-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="publication-year">{pub.year}</div>
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-conference">{pub.conference}</p>
                <p className="publication-description">{pub.description}</p>
                <motion.a 
                  href={pub.link} 
                  className="publication-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Publication <span className="arrow">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
