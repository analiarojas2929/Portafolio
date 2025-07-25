// src/pages/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import mamaSoyYoImg from '../assets/images/mama-soyyo.png'; // Asegúrate de guardar las imágenes en esta ruta
import dataScienceImg from '../assets/images/portafoliodataset.png';
import portalVehicularImg from '../assets/images/portal-vehicular.png';
import blogFrontEndImg from '../assets/images/blogfrond.png'; // Asegúrate de tener esta imagen también
import bodegaCiseImg from '../assets/images/inventario.png'; // Imagen del proyecto Inventario

const Projects = () => {
  // Datos de tus proyectos
  const projects = [
    {
      id: 1,
      title: "Mamá Soy Yo",
      description: "Plataforma para madres con recursos, comunidad y herramientas de apoyo en la maternidad.",
      demoLink: "https://mamasoyyo.web.app/",
      codeLink: "https://github.com/analiarojas2929/mamasoyyo",
      technologies: ["React", "Firebase", "Material UI"],
      image: mamaSoyYoImg // Añadida la referencia a la imagen
    },
    {
      id: 2,
      title: "Portal Vehicular",
      description: "Sistema de gestión y seguimiento vehicular con funcionalidades de registro, monitoreo y reportes.",
      demoLink: "https://portal-vehicular.azurewebsites.net/",
      codeLink: "",
      technologies: ["Angular", "Azure", "Node.js", "MongoDB"],
      image: portalVehicularImg // Añadida la referencia a la imagen
    },
    {
      id: 3,
      title: "Gestión de Inventario CISEL",
      description: "Sistema para administrar inventarios de materiales de construcción con seguimiento de estado, cantidades y fechas.",
      demoLink: "",
      codeLink: "https://github.com/analiarojas2929/Bodega-PTY4614-004D.git",
      technologies: ["PYTHON", "MySQL", "Bootstrap", "JavaScript"],
      image: bodegaCiseImg
    },
    {
      id: 4,
      title: "Data Science Portfolio",
      description: "Portafolio de proyectos de ciencia de datos mostrando análisis, visualizaciones y modelos predictivos.",
      demoLink: "https://datascience-portafolio.web.app/",
      codeLink: "https://github.com/analiarojas2929/data-science-portafolio",
      technologies: ["React", "Python", "Firebase", "Jupyter"],
      image: dataScienceImg // Añadida la referencia a la imagen
    },
    {
      id: 5,
      title: "Blog FrontEnd",
      description: "Plataforma de blog para compartir tutoriales y artículos sobre desarrollo frontend, con enfoque en Bootstrap y JavaScript.",
      demoLink: "",
      codeLink: "https://github.com/analiarojas2929/BlogFrontEnd",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: blogFrontEndImg
    }
  ];

  return (
    <div className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      <p className="section-subtitle">Explora algunas de mis creaciones destacadas</p>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
            technologies={project.technologies}
            image={project.image} // Pasando la imagen al componente
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
