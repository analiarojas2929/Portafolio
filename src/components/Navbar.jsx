import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/main.css';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'sobre-mi', label: 'Sobre mi' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <>
      <div className="background-image"></div>
      <Navbar 
        expand="lg" 
        fixed="top"
        className={`transparent-menu ${scrolled ? 'scrolled' : ''}`}
      >
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
              {navLinks.map(({id, label}) => (
                <Nav.Item key={id}>
                  <Link 
                    className={`nav-link ${activeLink === id ? 'active' : ''}`}
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    activeClass="active"
                    onSetActive={() => setActiveLink(id)}
                  >
                    {label}
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