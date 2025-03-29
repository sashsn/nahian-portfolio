import React from 'react';
import { motion } from 'framer-motion';
import './Research.css';

const Research = () => {
  const researchProjects = [
    {
      title: 'Integrated Drainage Plan and Detailed Design Services',
      organization: 'Coastal Towns Climate Resilience Project',
      year: '2024-Present',
      description: 'Urban drainage and green infrastructure modeling for coastal towns in Bangladesh. This project is authorized by the Ministry of Local Government, Rural Development, and Co-operatives of Bangladesh and funded by the Asian Development Bank.',
      link: '#'
    },
    {
      title: 'Rain-on-grid Modeling of Bagerhat Paurashava',
      organization: 'Undergraduate Thesis, BUET',
      year: '2024',
      description: 'Developed a comprehensive 2D hydrodynamic model using HEC-RAS for analyzing flood patterns and drainage requirements in Bagerhat Paurashava. The research identified critical flood-prone areas and proposed infrastructure improvements.',
      link: '#'
    },
    {
      title: 'Above-ground Biomass Prediction',
      organization: 'ICWFM 2025 Conference',
      year: '2025',
      description: 'Research on biomass prediction techniques using remote sensing data and machine learning algorithms, with applications for environmental monitoring and climate change studies.',
      link: '#'
    },
    {
      title: 'A Flood Prediction Model using HEC-HMS',
      organization: 'ICCESD 2024 Conference',
      year: '2024',
      description: 'Developed and validated a flood prediction model using HEC-HMS for early warning systems. The model incorporates rainfall data, terrain information, and river hydraulics to predict flood extents and timing.',
      link: '#'
    }
  ];

  return (
    <section id="research" className="research-section">
      <div className="research-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Research Work</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <div className="research-grid">
          {researchProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="research-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="research-year">{project.year}</div>
              <h3 className="research-title">{project.title}</h3>
              <h4 className="research-journal">{project.organization}</h4>
              <p className="research-description">{project.description}</p>
              <motion.a 
                href={project.link} 
                className="research-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="research-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Interested in research collaboration? <a href="#contact">Contact me</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
