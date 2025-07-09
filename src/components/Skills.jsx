import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaPython, 
  FaJava, FaNode, FaGithub, FaDocker, FaCode, FaTools, FaCloud, FaAws,
  FaProjectDiagram, FaUsers, FaRocket, FaExchangeAlt
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiMysql, SiPostgresql,
  SiTailwindcss, SiBootstrap, SiSpring, SiDocker,
  SiGooglecloud, SiPostman, SiJest, SiFigma, SiVscodium // Cambiar a SiVscodium
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Desarrollo Frontend",
      icon: <FaCode />,
      color: "#61DAFB",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "Angular", icon: <FaAngular />, color: "#DD0031" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" }
      ]
    },
    {
      title: "Desarrollo Backend",
      icon: <FaTools />,
      color: "#3776AB",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#3776AB" },
        { name: "Java", icon: <FaJava />, color: "#ED8B00" },
        { name: "Node.js", icon: <FaNode />, color: "#339933" },
        { name: "Spring Boot", icon: <SiSpring />, color: "#6DB33F" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: <SiMongodb />,
      color: "#47A248",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      color: "#FF9500",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      skills: [
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
        { name: "Azure", icon: <FaCloud />, color: "#0078D4" },
        { name: "Git", icon: <FaGithub />, color: "#F05032" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" }
      ]
    },
    {
      title: "Herramientas & Testing",
      icon: <FaTools />,
      color: "#FF6C37",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      skills: [
        { name: "Git", icon: <FaGithub />, color: "#F05032" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Jest", icon: <SiJest />, color: "#C21325" },
        { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
        { name: "VS Code", icon: <SiVscodium />, color: "#007ACC" } // Cambiado aquí
      ]
    },
    {
      title: "Metodologías",
      icon: <FaProjectDiagram />,
      color: "#0052CC",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      skills: [
        { name: "Scrum", icon: <FaUsers />, color: "#0052CC" },
        { name: "Agile", icon: <FaRocket />, color: "#FF4081" },
        { name: "REST APIs", icon: <FaExchangeAlt />, color: "#25D366" }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2 className="section-title">💻 Habilidades Técnicas</h2>
        <p className="section-subtitle">Tecnologías y herramientas que domino</p>
      </div>

      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="skill-category-card">
            <div className="category-header" style={{ background: category.gradient }}>
              <div className="category-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
            </div>
            
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;