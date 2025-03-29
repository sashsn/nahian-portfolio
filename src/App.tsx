import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BackgroundBubbles from './components/BackgroundBubbles/BackgroundBubbles';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or fetch initial data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* Background bubbles appear across the entire app */}
        <BackgroundBubbles />
        
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div 
              className="loading-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loader"></div>
              <h2>Loading Portfolio...</h2>
            </motion.div>
          ) : (
            <>
              <Navbar />
              <main className="content">
                <AnimatedRoutes />
              </main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
