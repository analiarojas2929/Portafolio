import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Cambié Switch por Routes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/main.css'; // Importa el archivo de estilo global
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>  {/* Cambié Switch por Routes */}
          <Route path="/" element={<Home />} />  {/* Usando 'element' en lugar de 'component' */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
