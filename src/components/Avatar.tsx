import { motion } from 'framer-motion';
import './Avatar.css';
import avatar from '../../public/assets/my-image.png';

const Avatar: React.FC = () => {
  return (
    <motion.div
      className="avatar-container"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Effet de lumière sur l'avatar */}
      <div className="avatar-glow" />

      <img
        src={avatar} // Remplacez par votre image
        alt="profil du développeur"
        className="avatar-image"
      />

      {/* Overlay sur hover */}
      <motion.div className="avatar-overlay" whileHover={{ opacity: 0.5 }}>
        <div className="avatar-info">
          <p className="avatar-name">Votre Nom</p>
          <p className="avatar-title">Développeur Web</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Avatar;
