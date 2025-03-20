import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './TiltCard.css';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay,
      }}
      className="tilt-wrapper"
    >
      <Tilt
        className={`tilt-card ${className}`}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.02}
        transitionSpeed={1500}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
      >
        {children}
      </Tilt>
    </motion.div>
  );
};

export default TiltCard;
