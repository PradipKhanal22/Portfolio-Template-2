import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-cyber-black"></div>
      
      {/* Moving Grid - Perspective */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-[0.15] transform perspective-1000 rotate-x-60 animate-[pulse_10s_infinite]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyber-purple/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyber-cyan/20 rounded-full blur-[100px] animate-float delay-1000"></div>
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyber-pink/10 rounded-full blur-[80px] animate-pulse"></div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
    </div>
  );
};

export default Background;