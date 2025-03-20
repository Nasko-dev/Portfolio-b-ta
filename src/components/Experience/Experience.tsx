import { motion } from 'framer-motion';
import {
  HiBriefcase,
  HiCalendar,
  HiLocationMarker,
  HiChevronRight,
} from 'react-icons/hi';
import './Experience.css';

// Types pour les expériences professionnelles
interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  current?: boolean;
}

const Experience = () => {
  // Variantes d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
      },
    },
  };

  // Données des expériences
  const experiences: ExperienceItem[] = [
    {
      id: 'exp-1',
      role: 'Développeur Frontend Senior',
      company: 'Entreprise Tech Innovante',
      location: 'Lyon, France',
      period: 'Jan 2022 - Présent',
      current: true,
      description: [
        "Développement et maintenance d'applications web complexes avec React et TypeScript",
        "Mise en place d'une architecture frontend basée sur les micro-frontends",
        "Migration d'une application legacy vers une stack moderne (React, Redux, TypeScript)",
        'Optimisation des performances, réduction de 40% du temps de chargement',
        'Collaboration avec les équipes UX/UI pour créer des interfaces utilisateurs intuitives',
      ],
      skills: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Webpack', 'Jest'],
    },
    {
      id: 'exp-2',
      role: 'Développeur Full Stack',
      company: 'Startup Prometteuse',
      location: 'Paris, France',
      period: 'Mar 2020 - Déc 2021',
      description: [
        "Développement d'une application SaaS de bout en bout avec Node.js et React",
        "Conception et implémentation d'une API REST sécurisée",
        'Mise en place de CI/CD avec GitHub Actions et AWS',
        'Intégration de paiements en ligne avec Stripe',
        'Participation aux sessions de product discovery et aux réunions de sprint',
      ],
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS', 'CI/CD'],
    },
    {
      id: 'exp-3',
      role: 'Développeur Frontend',
      company: 'Agence Web Créative',
      location: 'Bordeaux, France',
      period: 'Sep 2018 - Fév 2020',
      description: [
        'Développement de sites web pour des clients dans divers secteurs',
        "Création d'interfaces utilisateur interactives et responsives",
        'Transformation de designs Figma en applications web fonctionnelles',
        'Maintenance et évolution de sites existants',
        'Collaboration avec designers et chefs de projet',
      ],
      skills: [
        'JavaScript',
        'Vue.js',
        'HTML/CSS',
        'SCSS',
        'WordPress',
        'Figma',
      ],
    },
  ];

  return (
    <motion.section
      className="experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="experience-container">
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          Mon Parcours
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
        >
          Découvrez mon expérience professionnelle et les compétences que j'ai
          développées au fil de ma carrière
        </motion.p>

        {/* Timeline d'expérience */}
        <motion.div
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`timeline-item ${experience.current ? 'current' : ''}`}
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="marker-dot" />
                {index < experiences.length - 1 && (
                  <div className="marker-line" />
                )}
              </div>

              <motion.div
                className="timeline-content"
                whileHover={{ y: -5, x: 5, transition: { duration: 0.3 } }}
              >
                <div className="timeline-header">
                  <h3 className="timeline-title">{experience.role}</h3>
                  <div className="timeline-company">
                    <HiBriefcase className="timeline-icon" />
                    <span>{experience.company}</span>
                  </div>
                  <div className="timeline-meta">
                    <div className="timeline-location">
                      <HiLocationMarker className="timeline-icon" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="timeline-period">
                      <HiCalendar className="timeline-icon" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-description">
                  <ul>
                    {experience.description.map((item, i) => (
                      <li key={i}>
                        <HiChevronRight className="list-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-skills">
                  {experience.skills.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                {experience.current && (
                  <div className="current-badge">Poste actuel</div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Résumé et statistiques */}
        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="summary-card">
            <div className="summary-item">
              <div className="summary-number">5+</div>
              <div className="summary-label">Années d'expérience</div>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <div className="summary-number">20+</div>
              <div className="summary-label">Projets livrés</div>
            </div>
            <div className="summary-divider" />
            <div className="summary-item">
              <div className="summary-number">10+</div>
              <div className="summary-label">Technologies maîtrisées</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
