import React from 'react';
import { User, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Profile Card */}
          <div className="w-full lg:w-1/3 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative bg-cyber-dark/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                <img 
                  src="https://picsum.photos/400/500?grayscale" 
                  alt="Profile" 
                  className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-display font-bold text-white">Alex Code</h3>
                  <p className="text-cyber-cyan font-inter text-sm">Full Stack Engineer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-display font-bold mb-8 flex items-center gap-4">
              <User className="text-cyber-pink w-8 h-8" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">ABOUT ME</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 font-inter text-lg leading-relaxed border-l-2 border-cyber-purple/30 pl-6">
              <p>
                I am a visionary developer obsessed with creating immersive digital experiences. 
                My code isn't just functional; it's an aesthetic journey. Specializing in the 
                React ecosystem and futuristic UI design, I merge technical precision with 
                artistic flair.
              </p>
              <p>
                With a background in deep tech and design, I transform static concepts into 
                living, breathing holographic interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-white/5 border border-white/5 rounded-xl hover:border-cyber-cyan/50 transition-colors">
                <Shield className="w-8 h-8 text-cyber-cyan mb-4" />
                <h4 className="font-display font-bold text-xl mb-2">Secure & Scalable</h4>
                <p className="text-gray-400 text-sm">Built on rock-solid architecture with best practices in security.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/5 rounded-xl hover:border-cyber-pink/50 transition-colors">
                <Zap className="w-8 h-8 text-cyber-pink mb-4" />
                <h4 className="font-display font-bold text-xl mb-2">Lightning Fast</h4>
                <p className="text-gray-400 text-sm">Optimized performance for zero-latency user experiences.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;