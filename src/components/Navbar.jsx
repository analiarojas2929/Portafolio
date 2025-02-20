import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Para scroll suave
import { Navbar, Nav, Container } from 'react-bootstrap'; // Importando componentes de React-Bootstrap
import { motion } from 'framer-motion';
import '../styles/main.css'; // Asegúrate de importar el archivo CSS

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="background-image"></div>
      <Navbar expand="lg" className={`transparent-menu ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <motion.h1 
            className="name navbar-brand" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            Analia Rojas Araya
          </motion.h1>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              {['Sobre mi', 'habilidades', 'proyectos', 'experiencia'].map((section) => (
                <Nav.Item key={section}>
                  <Link 
                    className="nav-link" 
                    to={section} 
                    smooth={true} 
                    duration={500}
                    activeClass="active-link"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
