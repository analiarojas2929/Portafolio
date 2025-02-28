import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCm3ZMXaeOtJaFDKJbmIGsb0dINCLxA_cE",
    authDomain: "portafolio-6d91b.firebaseapp.com",
    projectId: "portafolio-6d91b",
    storageBucket: "portafolio-6d91b.firebasestorage.app",
    messagingSenderId: "413982999941",
    appId: "1:413982999941:web:b4e64baa2dda32eb2570ec",
    measurementId: "G-N6M66MQZ73"
  };

const app = initializeApp(firebaseConfig);
export default app;