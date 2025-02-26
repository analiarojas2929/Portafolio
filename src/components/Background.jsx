import React from 'react';
import '../styles/main.css';

const Background = () => {
  return (
    <div 
      className="gradient-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
      }}
    />
  );
};

export default Background;