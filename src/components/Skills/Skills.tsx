import { motion } from 'framer-motion';
import {
  HiCode,
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
} from 'react-icons/hi';
import { IoServerOutline } from 'react-icons/io5';
import './Skills.css';

// Types pour les compétences
interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

const Skills = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
      },
    },
  };

  // Données des compétences
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <HiOutlineDesktopComputer className="skill-category-icon" />,
      skills: [
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Backend',
      icon: <IoServerOutline className="skill-category-icon" />,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'Django', level: 65 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      title: 'Mobile',
      icon: <HiOutlineDeviceMobile className="skill-category-icon" />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 65 },
        { name: 'Swift', level: 60 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      title: 'Autres',
      icon: <HiCode className="skill-category-icon" />,
      skills: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'CI/CD', level: 75 },
        { name: 'Tests Unitaires', level: 80 },
        { name: 'UI/UX Design', level: 75 },
      ],
    },
  ];

  return (
    <motion.section
      className="skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          Mes Compétences
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
        >
          Un aperçu de mon expertise technique et mes domaines de spécialisation
        </motion.p>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              variants={itemVariants}
            >
              <div className="skill-card-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map(skill => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="technologies-cloud"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3>Technologies et outils</h3>
          <div className="technologies-tags">
            {[
              'React',
              'Vue',
              'TypeScript',
              'Node.js',
              'Express',
              'GraphQL',
              'MongoDB',
              'PostgreSQL',
              'Redux',
              'Jest',
              'Cypress',
              'Webpack',
              'Docker',
              'AWS',
              'Firebase',
              'Git',
              'SASS',
              'Tailwind',
              'Figma',
              'Photoshop',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-tag"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
