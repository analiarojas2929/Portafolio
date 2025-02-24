import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaMobile, FaServer, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDesktop />,
      title: "Desarrollo Web",
      description: "Sitios web modernos y responsivos"
    },
    {
      icon: <FaMobile />,
      title: "Diseño Móvil",
      description: "Aplicaciones móviles intuitivas"
    },
    {
      icon: <FaServer />,
      title: "Backend",
      description: "Desarrollo de APIs y servidores"
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Diseño de interfaces atractivas"
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Servicios</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;