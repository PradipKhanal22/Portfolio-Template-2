import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-lg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="font-display font-bold text-2xl text-white">NEO<span className="text-cyber-cyan">DEV</span></h3>
          <p className="text-gray-500 text-sm mt-1">© 2024 All Rights Reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors hover:scale-110 transform">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyber-purple transition-colors hover:scale-110 transform">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyber-pink transition-colors hover:scale-110 transform">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;