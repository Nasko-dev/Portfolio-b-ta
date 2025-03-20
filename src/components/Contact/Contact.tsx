import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiGlobe,
  HiPaperAirplane,
} from 'react-icons/hi';
import { HiOutlineGlobeAlt, HiOutlineEnvelope } from 'react-icons/hi2';
import { FaGithub, FaLinkedinIn, FaTwitter, FaDribbble } from 'react-icons/fa';
import './Contact.css';

type FormState = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

const Contact = () => {
  // État du formulaire
  const [formState, setFormState] = useState<FormState>({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  // État des erreurs de validation
  const [errors, setErrors] = useState<FormErrors>({});

  // État de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // Gérer les changements dans les champs du formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));

    // Effacer l'erreur si l'utilisateur commence à corriger
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Valider le formulaire
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validation du nom
    if (!formState.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }

    // Validation de l'email
    if (!formState.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation du sujet
    if (!formState.sujet.trim()) {
      newErrors.sujet = 'Le sujet est requis';
    }

    // Validation du message
    if (!formState.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formState.message.length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simuler un appel API
    try {
      // Dans un cas réel, vous feriez un appel à une API ici
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Réinitialiser le formulaire après succès
      setFormState({
        nom: '',
        email: '',
        sujet: '',
        message: '',
      });

      setSubmitStatus('success');

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variantes d'animation pour les éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
      },
    },
  };

  // Icônes de réseaux sociaux
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaDribbble />, url: 'https://dribbble.com', label: 'Dribbble' },
  ];

  // Informations de contact
  const contactInfo = [
    {
      icon: <HiMail />,
      label: 'Email',
      value: 'contact@monportfolio.fr',
      link: 'mailto:contact@monportfolio.fr',
    },
    {
      icon: <HiPhone />,
      label: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678',
    },
    {
      icon: <HiLocationMarker />,
      label: 'Localisation',
      value: 'Paris, France',
      link: null,
    },
    {
      icon: <HiGlobe />,
      label: 'Site Web',
      value: 'www.monportfolio.fr',
      link: 'https://www.monportfolio.fr',
    },
  ];

  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          Me Contacter
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
        >
          Une idée de projet ? N'hésitez pas à me contacter pour discuter de vos
          besoins
        </motion.p>

        <div className="contact-content">
          {/* Colonne gauche - Formulaire */}
          <motion.div
            className="contact-form-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="form-card" variants={itemVariants}>
              <h3 className="form-title">
                <HiOutlineEnvelope className="form-title-icon" />
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formState.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className={errors.nom ? 'error' : ''}
                  />
                  {errors.nom && (
                    <span className="error-message">{errors.nom}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="sujet">Sujet</label>
                  <input
                    type="text"
                    id="sujet"
                    name="sujet"
                    value={formState.sujet}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    className={errors.sujet ? 'error' : ''}
                  />
                  {errors.sujet && (
                    <span className="error-message">{errors.sujet}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    rows={5}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`submit-button ${
                    isSubmitting ? 'submitting' : ''
                  } ${submitStatus !== 'idle' ? submitStatus : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="spinner"></span>
                  ) : submitStatus === 'success' ? (
                    'Message envoyé !'
                  ) : submitStatus === 'error' ? (
                    'Erreur, réessayez'
                  ) : (
                    <>
                      Envoyer <HiPaperAirplane className="send-icon" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Infos de contact et réseaux sociaux */}
          <motion.div
            className="contact-info-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Informations de contact */}
            <motion.div className="info-card" variants={itemVariants}>
              <h3 className="info-title">
                <HiOutlineGlobeAlt className="info-title-icon" />
                Informations de contact
              </h3>

              <ul className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <li key={`contact-${index}`} className="contact-info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      {info.link ? (
                        <a href={info.link} className="info-value link">
                          {info.value}
                        </a>
                      ) : (
                        <span className="info-value">{info.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div className="social-card" variants={itemVariants}>
              <h3 className="social-title">Suivez-moi</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={`social-${index}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Message de disponibilité */}
            <motion.div className="availability-card" variants={itemVariants}>
              <div className="availability-status">
                <span className="status-dot"></span>
                <span className="status-text">
                  Disponible pour de nouveaux projets
                </span>
              </div>
              <p className="availability-message">
                Je suis actuellement à la recherche de nouvelles opportunités.
                N'hésitez pas à me contacter pour discuter de vos projets !
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
