import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/main.css';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isDark, setIsDark] = useState(true);

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

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    const theme = newTheme ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

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
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'logros', label: 'Logros' },
    { id: 'github-stats', label: 'GitHub' },
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
              {navLinks.map(({id, label, icon}) => (
                <Nav.Item key={id}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
                      <span className="nav-icon">{icon}</span>
                      <span className="nav-text">{label}</span>
                    </Link>
                  </motion.div>
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