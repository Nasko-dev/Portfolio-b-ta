import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'Créatif & Passionné',
  'Innovant & Curieux',
  'Déterminé & Visionnaire',
  'Polyvalent & Dynamique',
  'Précis & Méthodique',
  'Audacieux & Inspiré',
];

const TypewriterText = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(2000);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      }
    } else {
      if (currentText === phrases[currentPhraseIndex]) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(
            phrases[currentPhraseIndex].slice(0, currentText.length + 1),
          );
        }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, delay]);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="animate-gradient-text subtitle"
    >
      {currentText}
      <span className="cursor">|</span>
    </motion.h2>
  );
};

export default TypewriterText;
