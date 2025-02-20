import React from 'react';
import '../styles/main.css'; // Asegúrate de crear este archivo CSS
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const Background = () => {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'fixed', // Mantener el fondo fijo
        top: 0,
        left: 0,
        width: '100%', // Asegura que ocupe todo el ancho
        height: '100vh', // Asegura que ocupe toda la altura de la ventana
        zIndex: -1, // Asegura que esté detrás del contenido
        backgroundColor: '#040404', // Cambiar a backgroundColor en lugar de background-color
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=0.3&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%23000005&color2=%23fe7cae&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=0.9&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=21.5&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=3.5&uFrequency=5.5&uSpeed=0.5&uStrength=5.8&uTime=0.2&wireframe=false"
      />
    </ShaderGradientCanvas>
  );
};

export default Background;