// Navbar.js
import React from 'react';
import { Link } from 'react-scroll'; // Para scroll suave
import { Navbar, Nav, Container } from 'react-bootstrap'; // Importando componentes de React-Bootstrap
import { motion } from 'framer-motion';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
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
  );
};

export default NavbarComponent;
