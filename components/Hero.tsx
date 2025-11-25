import React from 'react';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <div className="inline-block px-4 py-1 mb-6 border border-cyber-cyan/30 rounded-full bg-cyber-cyan/5 backdrop-blur-sm">
            <span className="text-cyber-cyan font-display tracking-widest text-xs uppercase animate-pulse">System Online v4.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            <span className="block text-white hologram-text">ARCHITECT OF</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-purple">THE FUTURE</span>
          </h1>

          <p className="text-gray-400 font-inter text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I build high-performance, holographic web interfaces using modern tech stacks. Step into the next generation of web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="group relative px-8 py-3 bg-cyber-cyan/10 border border-cyber-cyan text-cyber-cyan font-display font-bold uppercase tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">View Projects <ArrowRight size={18} /></span>
              <div className="absolute inset-0 bg-cyber-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"></div>
              <span className="absolute inset-0 z-10 text-black flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Projects <ArrowRight size={18} /></span>
            </a>

            <a href="#contact" className="px-8 py-3 bg-transparent border border-cyber-pink/50 text-cyber-pink font-display font-bold uppercase tracking-wider hover:bg-cyber-pink/10 hover:shadow-[0_0_20px_rgba(255,0,153,0.3)] transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>

        {/* 3D Visuals */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Hologram Circle */}
            <div className="absolute inset-0 border-2 border-dashed border-cyber-cyan/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-cyber-purple/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Center Core with Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Background glow */}
              <div className="absolute w-40 h-40 bg-gradient-to-br from-cyber-cyan to-cyber-purple rounded-full blur-2xl opacity-40 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative z-10 group">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink rounded-full opacity-75 blur group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-cyber-cyan/50 shadow-[0_0_40px_rgba(0,245,255,0.3)] group-hover:shadow-[0_0_60px_rgba(0,245,255,0.5)] transition-all duration-500 group-hover:scale-105">
                  {/* Cyberpunk grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,245,255,0.05)_25%,rgba(0,245,255,0.05)_26%,transparent_27%,transparent_74%,rgba(0,245,255,0.05)_75%,rgba(0,245,255,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,245,255,0.05)_25%,rgba(0,245,255,0.05)_26%,transparent_27%,transparent_74%,rgba(0,245,255,0.05)_75%,rgba(0,245,255,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px] z-10 pointer-events-none"></div>
                  
                  {/* Scanline effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent animate-scan z-10 pointer-events-none"></div>
                  
                  {/* Your image */}
                  <img 
                    src="/me.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/20 via-transparent to-cyber-cyan/10 mix-blend-overlay"></div>
                </div>

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cyber-cyan"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-cyber-pink"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-cyber-purple"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-cyber-cyan"></div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-0 right-10 p-4 bg-cyber-black/80 border border-cyber-pink/50 rounded-lg animate-float delay-100">
              <Database className="w-6 h-6 text-cyber-pink" />
            </div>
            <div className="absolute bottom-10 left-0 p-4 bg-cyber-black/80 border border-cyber-cyan/50 rounded-lg animate-float delay-300">
              <Globe className="w-6 h-6 text-cyber-cyan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;