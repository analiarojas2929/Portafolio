// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, demoLink, codeLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
      <a href={codeLink} target="_blank" rel="noopener noreferrer">Código</a>
    </div>
  );
};

export default ProjectCard;
