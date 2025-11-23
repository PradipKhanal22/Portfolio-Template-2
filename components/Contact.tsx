import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-cyber-purple/5 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Info */}
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              INITIATE <span className="text-cyber-pink">LINK</span>
            </h2>
            <p className="text-gray-400 mb-8 font-inter">
              Ready to upgrade your digital presence? Send a transmission through the secure channel below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-black transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-mono">EMAIL</h4>
                  <p className="text-white">alex.code@future.dev</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyber-purple group-hover:bg-cyber-purple group-hover:text-black transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-mono">PHONE</h4>
                  <p className="text-white">+1 (555) 010-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyber-pink group-hover:bg-cyber-pink group-hover:text-black transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 font-mono">BASE</h4>
                  <p className="text-white">Neo Tokyo, Sector 7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent rounded-2xl pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-cyber-cyan mb-2">IDENTIFIER</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none transition-all" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyber-cyan mb-2">CONTACT</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none transition-all" placeholder="Email" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-mono text-cyber-cyan mb-2">TRANSMISSION</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan outline-none transition-all" placeholder="Message"></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-display font-bold uppercase tracking-wider rounded-lg hover:shadow-[0_0_20px_rgba(196,0,255,0.4)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <Send size={18} /> Send Data
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;