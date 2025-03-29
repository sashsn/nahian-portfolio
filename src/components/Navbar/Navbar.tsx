import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Handle active section highlighting based on scroll position
      const sections = ['about', 'education', 'skills', 'research', 'publications', 'updates', 'contact'];
      
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const navbarClass = scrolled ? 'navbar scrolled' : 'navbar';

  // Check if we're on the homepage to enable smooth scrolling
  const isHomePage = location.pathname === '/';

  return (
    <motion.nav 
      className={navbarClass}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">Muhtasim H. Nahian</Link>
        
        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            {isHomePage ? (
              <a 
                href="#top" 
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className={activeSection === 'home' ? 'active' : ''}
              >
                Home
              </a>
            ) : (
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            )}
          </li>
          {isHomePage ? (
            // Smooth scroll links for homepage
            <>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                  className={activeSection === 'about' ? 'active' : ''}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('education');
                  }}
                  className={activeSection === 'education' ? 'active' : ''}
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('skills');
                  }}
                  className={activeSection === 'skills' ? 'active' : ''}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#research" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('research');
                  }}
                  className={activeSection === 'research' ? 'active' : ''}
                >
                  Research
                </a>
              </li>
              <li>
                <a 
                  href="#publications" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('publications');
                  }}
                  className={activeSection === 'publications' ? 'active' : ''}
                >
                  Publications
                </a>
              </li>
              <li>
                <a 
                  href="#updates" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('updates');
                  }}
                  className={activeSection === 'updates' ? 'active' : ''}
                >
                  Updates
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className={activeSection === 'contact' ? 'active' : ''}
                >
                  Contact
                </a>
              </li>
            </>
          ) : (
            // Regular router links for separate pages
            <>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
              <li><Link to="/education" className={location.pathname === '/education' ? 'active' : ''}>Education</Link></li>
              <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
              <li><Link to="/research" className={location.pathname === '/research' ? 'active' : ''}>Research</Link></li>
              <li><Link to="/publications" className={location.pathname === '/publications' ? 'active' : ''}>Publications</Link></li>
              <li><Link to="/updates" className={location.pathname === '/updates' ? 'active' : ''}>Updates</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
            </>
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
