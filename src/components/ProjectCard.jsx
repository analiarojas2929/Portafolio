// src/components/ProjectCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, demoLink, codeLink, technologies, image }) => {
  return (
    <div className="project-card-static">
      {image && (
        <div className="project-image-static">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="project-content-static">
        <h3>{title}</h3>
        <p>{description}</p>
        
        {technologies && technologies.length > 0 && (
          <div className="tech-tags-static">
            {technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag-static">{tech}</span>
            ))}
          </div>
        )}
        
        <div className="project-links-static">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-static demo-link-static"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
            </a>
          )}
          
          {codeLink && (
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-static code-link-static"
            >
              <FontAwesomeIcon icon={faCode} /> Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
