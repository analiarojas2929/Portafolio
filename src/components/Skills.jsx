import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaPython, 
  FaJava, FaNode, FaGithub, FaDocker, FaCode, FaTools
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiMysql, SiPostgresql,
  SiTailwindcss, SiBootstrap, SiSpring, SiDocker
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Desarrollo Frontend",
      icon: <FaCode />,
      color: "#61DAFB",
      skills: [
        { name: "HTML5", level: 90, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", level: 85, icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", level: 80, icon: <FaJs />, color: "#F7DF1E" },
        { name: "React", level: 85, icon: <FaReact />, color: "#61DAFB" },
        { name: "Angular", level: 75, icon: <FaAngular />, color: "#DD0031" },
        { name: "TypeScript", level: 75, icon: <SiTypescript />, color: "#3178C6" },
        { name: "TailwindCSS", level: 80, icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Bootstrap", level: 85, icon: <SiBootstrap />, color: "#7952B3" }
      ]
    },
    {
      title: "Desarrollo Backend",
      icon: <FaTools />,
      color: "#3776AB",
      skills: [
        { name: "Python", level: 75, icon: <FaPython />, color: "#3776AB" },
        { name: "Java", level: 70, icon: <FaJava />, color: "#ED8B00" },
        { name: "Node.js", level: 75, icon: <FaNode />, color: "#339933" },
        { name: "Spring Boot", level: 70, icon: <SiSpring />, color: "#6DB33F" }
      ]
    },
    {
      title: "Bases de Datos",
      icon: <SiMongodb />,
      color: "#47A248",
      skills: [
        { name: "MongoDB", level: 75, icon: <SiMongodb />, color: "#47A248" },
        { name: "MySQL", level: 80, icon: <SiMysql />, color: "#4479A1" },
        { name: "PostgreSQL", level: 70, icon: <SiPostgresql />, color: "#336791" }
      ]
    },
    {
      title: "DevOps & Herramientas",
      icon: <SiDocker />,
      color: "#2496ED",
      skills: [
        { name: "Git", level: 85, icon: <FaGithub />, color: "#F05032" },
        { name: "Docker", level: 70, icon: <FaDocker />, color: "#2496ED" }
      ]
    }
  ];

  return (
    <motion.section 
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="section-title"
        initial={{ y: -50 }}
        whileInView={{ y: 0 }}
      >
        Habilidades Técnicas
      </motion.h2>

      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="skill-category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="category-header" style={{ backgroundColor: category.color }}>
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: skillIndex * 0.1 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="progress-container">
                      <motion.div
                        className="progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;