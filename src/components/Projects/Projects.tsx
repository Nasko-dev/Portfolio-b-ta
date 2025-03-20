import { useState } from "react";
import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import "./Projects.css";

import bookingApp from "../../assets/booking-app.webp.webp";
// import analyticsDashboard from "../../assets/projects/analytics-dashboard.webp";
// import fitnessApp from "../../assets/projects/fitness-app.webp";
// import ecommerceApi from "../../assets/projects/ecommerce-api.webp";
// import uiRedesign from "../../assets/projects/ui-redesign.webp";
// import creativePortfolio from "../../assets/projects/creative-portfolio.webp";

// Types pour les projets
interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: Technology[];
  liveLink?: string;
  codeLink?: string;
  featured?: boolean;
}

const Projects = () => {
  // État pour les filtres de catégorie
  const [activeFilter, setActiveFilter] = useState("Tous");

  // Variantes d'animation
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
        type: "spring",
        damping: 15,
      },
    },
  };

  // Tableau des catégories de projets
  const categories = ["Tous", "Web", "Mobile", "UI/UX", "Backend"];

  // Technologies avec codes couleurs
  const techColors: Record<string, string> = {
    React: "#61DAFB",
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Next: "#000000",
    Node: "#339933",
    Express: "#000000",
    MongoDB: "#47A248",
    Firebase: "#FFCA28",
    Flutter: "#02569B",
    Vue: "#4FC08D",
    GraphQL: "#E10098",
    "Tailwind CSS": "#38B2AC",
    SCSS: "#CC6699",
    "Material UI": "#0081CB",
    Python: "#3776AB",
    Django: "#092E20",
    Figma: "#F24E1E",
  };

  // Données fictives des projets
  const projects: Project[] = [
    {
      id: "project-1",
      title: "Application de Réservation",
      description:
        "Plateforme de réservation en ligne avec système de paiement intégré, gestion des disponibilités et notifications en temps réel.",
      image: bookingApp,
      category: "Web",
      featured: true,
      technologies: [
        { name: "React", color: techColors.React },
        { name: "Node", color: techColors.Node },
        { name: "MongoDB", color: techColors.MongoDB },
        { name: "TypeScript", color: techColors.TypeScript },
      ],
      liveLink: "https://example.com",
      codeLink: "https://github.com",
    },
    {
      id: "project-2",
      title: "Dashboard Analytics",
      description:
        "Interface d'administration avec tableaux de bord interactifs, graphiques de données et système d'analyse avancé.",
      image: bookingApp,
      category: "Web",
      technologies: [
        { name: "Vue", color: techColors.Vue },
        { name: "TypeScript", color: techColors.TypeScript },
        { name: "Firebase", color: techColors.Firebase },
        { name: "Tailwind CSS", color: techColors["Tailwind CSS"] },
      ],
      liveLink: "https://example.com",
      codeLink: "https://github.com",
    },
    {
      id: "project-3",
      title: "Application Mobile de Fitness",
      description:
        "Application mobile complète de fitness avec suivi d'entraînement, plans personnalisés et suivi de progression.",
      image: bookingApp,
      category: "Mobile",
      featured: true,
      technologies: [
        { name: "Flutter", color: techColors.Flutter },
        { name: "Firebase", color: techColors.Firebase },
        { name: "Node", color: techColors.Node },
      ],
      liveLink: "https://example.com",
      codeLink: "https://github.com",
    },
    {
      id: "project-4",
      title: "API e-Commerce",
      description:
        "Backend complet pour une plateforme e-commerce avec gestion des produits, paniers, commandes et paiements.",
      image: bookingApp,
      category: "Backend",
      technologies: [
        { name: "Node", color: techColors.Node },
        { name: "Express", color: techColors.Express },
        { name: "MongoDB", color: techColors.MongoDB },
        { name: "GraphQL", color: techColors.GraphQL },
      ],
      codeLink: "https://github.com",
    },
    {
      id: "project-5",
      title: "Redesign UI Site Web",
      description:
        "Refonte complète de l'interface utilisateur d'un site web e-commerce pour améliorer l'expérience utilisateur et les conversions.",
      image: bookingApp,
      category: "UI/UX",
      technologies: [
        { name: "Figma", color: techColors.Figma },
        { name: "SCSS", color: techColors.SCSS },
        { name: "React", color: techColors.React },
      ],
      liveLink: "https://example.com",
    },
    {
      id: "project-6",
      title: "Portfolio Créatif",
      description:
        "Portfolio personnel avec animations fluides, affichage de projets dynamique et interface utilisateur immersive.",
      image: bookingApp,
      category: "Web",
      technologies: [
        { name: "React", color: techColors.React },
        { name: "TypeScript", color: techColors.TypeScript },
        { name: "Tailwind CSS", color: techColors["Tailwind CSS"] },
      ],
      liveLink: "https://example.com",
      codeLink: "https://github.com",
    },
  ];

  // Filtrer les projets en fonction de la catégorie active
  const filteredProjects = projects.filter(
    (project) => activeFilter === "Tous" || project.category === activeFilter
  );

  return (
    <motion.section
      className="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Mes Projets
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 50 }}
        >
          Découvrez une sélection de mes réalisations et projets personnels
        </motion.p>

        {/* Filtres de projet */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? "featured" : ""}`}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech.name}
                      className="tech-pill"
                      style={{
                        backgroundColor: `${tech.color}15`,
                        color: tech.color,
                        borderColor: `${tech.color}30`,
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      <HiExternalLink /> Voir le projet
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link code-link"
                    >
                      <HiCode /> Voir le code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
