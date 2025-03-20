import React from 'react';
import { HiArrowRight } from 'react-icons/hi2';
import './ProjectsBtn.css';

const ProjectsBtn: React.FC = () => {
  return (
    <a href="/projects" className="projects-btn">
      <span className="btn-content">
        Mes Projets
        <HiArrowRight className="btn-arrow" />
      </span>

      <span className="btn-gradient" />
    </a>
  );
};

export default ProjectsBtn;
