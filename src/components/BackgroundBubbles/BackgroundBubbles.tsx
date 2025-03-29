import React, { useEffect, useState, useMemo } from 'react';
import { motion, useScroll } from 'framer-motion';
import './BackgroundBubbles.css';

const BackgroundBubbles = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });
  
  const { scrollYProgress } = useScroll();
  
  // Update window size on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Generate bubble data using useMemo to avoid recreation on each render
  const bubbles = useMemo(() => {
    return Array(15).fill(0).map((_, i) => {
      const size = Math.random() * 150 + 80;
      const speed = Math.random() * 12 + 8;
      
      return {
        id: i,
        size,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        xMovement: Math.random() * 60 - 30, // More horizontal movement
        yMovement: Math.random() * 60 - 30, // More vertical movement
        duration: speed,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.12 + 0.08,
        rotate: Math.random() * 360,
        // Add different motion paths for more organic movement
        motionPath: Math.floor(Math.random() * 3), // 0, 1, or 2 for different paths
        // Add different directions for scroll reaction
        scrollDirection: Math.random() > 0.5 ? 1 : -1
      };
    });
  }, []);
  
  // Debug log
  useEffect(() => {
    console.log('BackgroundBubbles component mounted with', bubbles.length, 'bubbles');
  }, [bubbles.length]);
  
  return (
    <div className="background-bubbles-container">
      {bubbles.map((bubble) => {
        // Custom animations based on the motion path
        let xPath, yPath;
        switch(bubble.motionPath) {
          case 0: // Circular motion
            xPath = [0, bubble.xMovement/2, bubble.xMovement, bubble.xMovement/2, 0];
            yPath = [0, bubble.yMovement/2, 0, -bubble.yMovement/2, 0];
            break;
          case 1: // Figure-8 motion
            xPath = [0, bubble.xMovement, 0, -bubble.xMovement, 0];
            yPath = [0, bubble.yMovement, 0, bubble.yMovement, 0];
            break;
          case 2: // Random zigzag
          default:
            xPath = [0, bubble.xMovement/2, -bubble.xMovement/3, bubble.xMovement, 0];
            yPath = [0, -bubble.yMovement, bubble.yMovement/2, bubble.yMovement, 0];
            break;
        }
        
        return (
          <motion.div
            key={bubble.id}
            className="background-bubble"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.initialX}%`,
              top: `${bubble.initialY}%`,
              opacity: bubble.opacity,
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: [0.9, 1, 0.95, 1],
              x: xPath,
              y: yPath,
              rotate: [0, bubble.rotate/2, bubble.rotate],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ opacity: 0.7, scale: 1.1 }}
          >
            <motion.div 
              className="bubble-inner"
              style={{
                scale: 1,
                transformOrigin: "center"
              }}
              animate={{
                y: scrollYProgress.get() * 100 * bubble.scrollDirection,
                scale: 1 - Math.abs(scrollYProgress.get() * 0.1)
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default BackgroundBubbles;
