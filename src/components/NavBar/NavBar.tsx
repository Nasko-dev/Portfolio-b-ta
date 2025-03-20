import { useState, useEffect } from 'react';
import {
  HiHome,
  HiCode,
  HiBriefcase,
  HiDocumentText,
  HiMail,
} from 'react-icons/hi';
import './NavBar.css';

interface NavBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onSectionChange }) => {
  // Gestionnaire d'événement commun pour le clavier
  const handleKeyDown = (sectionId: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="right-navbar">
      <div
        className={`nav-dot ${activeSection === 'accueil' ? 'active' : ''}`}
        onClick={() => onSectionChange('accueil')}
        onKeyDown={handleKeyDown('accueil')}
        role="button"
        tabIndex={0}
        aria-label="Section Accueil"
      >
        <HiHome className="nav-icon" />
        <span className="tooltip">Accueil</span>
      </div>
      <div
        className={`nav-dot ${activeSection === 'competences' ? 'active' : ''}`}
        onClick={() => onSectionChange('competences')}
        onKeyDown={handleKeyDown('competences')}
        role="button"
        tabIndex={0}
        aria-label="Section Compétences"
      >
        <HiCode className="nav-icon" />
        <span className="tooltip">Compétences</span>
      </div>
      <div
        className={`nav-dot ${activeSection === 'projets' ? 'active' : ''}`}
        onClick={() => onSectionChange('projets')}
        onKeyDown={handleKeyDown('projets')}
        role="button"
        tabIndex={0}
        aria-label="Section Projets"
      >
        <HiDocumentText className="nav-icon" />
        <span className="tooltip">Projets</span>
      </div>
      <div
        className={`nav-dot ${activeSection === 'experience' ? 'active' : ''}`}
        onClick={() => onSectionChange('experience')}
        onKeyDown={handleKeyDown('experience')}
        role="button"
        tabIndex={0}
        aria-label="Section Expérience"
      >
        <HiBriefcase className="nav-icon" />
        <span className="tooltip">Expérience</span>
      </div>
      <div
        className={`nav-dot ${activeSection === 'contact' ? 'active' : ''}`}
        onClick={() => onSectionChange('contact')}
        onKeyDown={handleKeyDown('contact')}
        role="button"
        tabIndex={0}
        aria-label="Section Contact"
      >
        <HiMail className="nav-icon" />
        <span className="tooltip">Contact</span>
      </div>
    </div>
  );
};

export default NavBar;
