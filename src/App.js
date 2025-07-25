import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Background from './components/Background';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <>
      <Header />
      <Background />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
