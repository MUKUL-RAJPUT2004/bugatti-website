import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CompanyHistory from './components/CompanyHistory';
import ModelsSection from './components/ModelsSection';
import EngineSection from './components/EngineSection';
import PerformanceStats from './components/PerformanceStats';
import ColorCustomizer from './components/ColorCustomizer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CompanyHistory />
      <ModelsSection />
      <EngineSection />
      <PerformanceStats />
      <ColorCustomizer />
      <Footer />
    </div>
  );
}

export default App;