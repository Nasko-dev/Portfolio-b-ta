import React from 'react';
import { motion } from 'framer-motion';
import './FloatingText.css';

interface FloatingTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const FloatingText: React.FC<FloatingTextProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  // Créer un variant d'animation pour chaque caractère
  const letterVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [-2, 2, -2],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: 'loop' as const,
        duration: 1.5,
        ease: 'easeInOut',
        delay: delay + i * 0.05,
      },
    }),
  };

  // Animation de révélation du texte complet
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`floating-text ${className}`}
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={`char-${i}`}
          className="floating-character"
          variants={letterVariant}
          // Animation flottante une fois le texte révélé
          whileInView="animate"
          viewport={{ once: false }}
          custom={i}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default FloatingText;
