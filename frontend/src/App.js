import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import HeroSection from './components/sections/HeroSection';
import SpaceBackground from './components/layout/SpaceBackground';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <SpaceBackground />
      </div>
    </BrowserRouter>
  );
}

export default App;
