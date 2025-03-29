import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'water', name: 'Water Modeling' },
    { id: 'programming', name: 'Programming' },
    { id: 'geospatial', name: 'Geospatial Analysis' },
    { id: 'tools', name: 'Tools' }
  ];
  
  const allSkills = [
    { name: 'HEC-RAS', level: 90, category: 'water' },
    { name: 'HEC-HMS', level: 85, category: 'water' },
    { name: 'EPA SWMM', level: 85, category: 'water' },
    { name: 'PC-SWMM', level: 80, category: 'water' },
    { name: 'Python', level: 85, category: 'programming' },
    { name: 'MATLAB', level: 75, category: 'programming' },
    { name: 'R', level: 70, category: 'programming' },
    { name: 'ArcGIS', level: 90, category: 'geospatial' },
    { name: 'QGIS', level: 85, category: 'geospatial' },
    { name: 'Google Earth Engine', level: 80, category: 'geospatial' },
    { name: 'Google Earth', level: 95, category: 'geospatial' },
    { name: 'Office365', level: 90, category: 'tools' },
    { name: 'G-suite', level: 85, category: 'tools' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);
  
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
          <div className="section-divider"></div>
        </motion.div>
        
        <motion.div 
          className="skill-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map(category => (
            <button 
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            >
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar-container">
                <motion.div 
                  className="skill-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="skill-percentage">{skill.level}%</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
