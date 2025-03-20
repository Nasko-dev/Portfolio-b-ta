import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowDown } from "react-icons/hi2";
import "./App.css";

// Composants
import ThreeBackground from "./components/ThreeBackground";
import AdvancedParticles from "./components/AdvancedParticles";
import TiltCard from "./components/TiltCard";
import FloatingText from "./components/FloatingText";
import Avatar from "./components/Avatar";
import ProjectsBtn from "./components/ProjectsBtn";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import TypewriterText from "./components/TypewriterText";

// Variantes d'animation
const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// Variantes pour l'animation de transition entre les sections
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      // Définir si le défilement a dépassé un certain seuil
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    // Faire défiler la page de manière fluide
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fonction pour rendre le contenu de la section active
  const renderSection = () => {
    switch (activeSection) {
      case "competences":
        return <Skills key="competences" />;
      case "projets":
        return <Projects key="projets" />;
      case "experience":
        return <Experience key="experience" />;
      case "contact":
        return <Contact key="contact" />;
      default: // Page d'accueil par défaut
        return (
          <div key="accueil" className="content-container">
            <div className="content-grid">
              {/* Colonne gauche - Texte et CTA */}
              <div className="text-column">
                {/* Badge animé */}
                <motion.div
                  variants={fadeIn("down", 0.1)}
                  initial="hidden"
                  animate="show"
                  className="badge"
                >
                  <span className="badge-icon">✦</span>
                  Portfolio Design 2024
                </motion.div>

                {/* Titre principal avec animation par caractère */}
                <div className="title-container">
                  <FloatingText
                    text="Bonjour, je suis un Développeur Web"
                    className="main-title"
                    delay={0.3}
                  />
                </div>

                {/* Sous-titre animé avec gradient */}
                <div className="subtitle-container">
                  <TypewriterText />
                </div>

                {/* Description avec effet de fade */}
                <motion.p
                  variants={fadeIn("up", 0.5)}
                  initial="hidden"
                  animate="show"
                  className="description"
                >
                  Je suis spécialisé dans la création d'expériences web
                  <span className="highlight"> modernes et interactives</span>.
                  J'aime combiner créativité et technologies pour créer des
                  <span className="highlight"> solutions innovantes</span>, tout
                  en veillant à une expérience utilisateur exceptionnelle.
                </motion.p>

                {/* Actions principales */}
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  initial="hidden"
                  animate="show"
                  className="actions"
                >
                  <ProjectsBtn />
                  <a href="/contact" className="contact-btn">
                    Me Contacter
                  </a>
                </motion.div>

                {/* Indicateur de défilement animé */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                  }}
                  className="scroll-indicator"
                >
                  <HiArrowDown className="scroll-icon" />
                </motion.div>
              </div>

              {/* Colonne droite - Avatar et éléments visuels */}
              <div className="avatar-column">
                {/* Élément décoratif */}
                <div className="avatar-backdrop" />

                {/* Avatar avec effet de carte inclinée */}
                <div className="avatar-wrapper">
                  <TiltCard className="avatar-card">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 2, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="avatar-motion"
                    >
                      <Avatar />
                    </motion.div>
                  </TiltCard>

                  {/* Bulles d'expérience flottantes */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="experience-bubble experience-left"
                  >
                    <span className="highlight">5+ ans</span> d'expérience
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="experience-bubble experience-right"
                  >
                    <span className="highlight">50+</span> projets réalisés
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`app-container ${scrolled ? "scrolled" : ""}`}
    >
      {/* Arrière-plan ThreeJS */}
      <ThreeBackground />

      {/* Arrière-plan dynamique */}
      <div className="background-gradient" />
      <div className="background-grid" />

      {/* Particules animées */}
      <AdvancedParticles />

      {/* Barre de navigation à droite */}
      <NavBar activeSection={activeSection} onSectionChange={scrollToSection} />

      {/* Contenu de la section active avec animation de transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          className="section-container"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default App;
