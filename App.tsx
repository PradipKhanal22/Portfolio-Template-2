import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberChat from './components/CyberChat';

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-cyber-cyan selection:text-black">
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Services />
        <Contact />
      </main>

      <Footer />
      <CyberChat />
    </div>
  );
}

export default App;