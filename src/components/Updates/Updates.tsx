import React from 'react';
import { motion } from 'framer-motion';
import './Updates.css';

const Updates = () => {
  const updates = [
    {
      date: '24 Feb 2025',
      title: 'Research Publication',
      description: 'Research on "Above-ground Biomass Prediction" published in the Conference Proceedings of ICWFM 2025.'
    },
    {
      date: '06 Nov 2024',
      title: 'Committee Appointment',
      description: 'Appointed to the Drainage and Flood Management sub-committee of RAJUK as a representative from DWRE, BUET.'
    },
    {
      date: '01 Jul 2024',
      title: 'New Position',
      description: 'Commenced role as Research Assistant at BUET.'
    },
    {
      date: '01 Jul 2024',
      title: 'Graduation',
      description: 'Graduated from the Department of Water Resources Engineering at BUET.'
    },
    {
      date: '12 Jun 2024',
      title: 'Thesis Defense',
      description: 'Successfully defended undergraduate thesis on "Rain-on-grid Modeling of Bagerhat Paurashava using HEC-RAS 2D."'
    },
    {
      date: '09 Feb 2024',
      title: 'Project Publication',
      description: 'Term project on "A Flood Prediction Model using HEC-HMS" published in the Conference Proceedings of ICCESD 2024.'
    }
  ];

  return (
    <section id="updates" className="updates-section">
      <div className="updates-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>News & Updates</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="updates-timeline">
          {updates.map((update, index) => (
            <motion.div 
              key={index} 
              className="update-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="update-date">{update.date}</div>
              <div className="update-content">
                <h3 className="update-title">{update.title}</h3>
                <p className="update-description">{update.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
