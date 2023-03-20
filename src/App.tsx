import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import StarsCanvas from './components/canvas/StarsCanvas';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Works from './components/Works';

const App: React.FC = () => {
  console.log('');
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
