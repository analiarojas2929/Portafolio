// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <ProjectCard
        title="Mi Proyecto 1"
        description="Descripción del proyecto"
        demoLink="https://demo1.com"
        codeLink="https://github.com/tu-usuario/proyecto1"
      />
      <ProjectCard
        title="Mi Proyecto 2"
        description="Descripción del proyecto"
        demoLink="https://demo2.com"
        codeLink="https://github.com/tu-usuario/proyecto2"
      />
    </div>
  );
};

export default Projects;
