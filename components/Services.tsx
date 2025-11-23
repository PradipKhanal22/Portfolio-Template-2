import React from 'react';
import { Layout, Smartphone, Database, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    { title: "Web Development", desc: "Full-stack scalable solutions built with React & Node.", icon: Globe, color: "text-cyber-cyan" },
    { title: "UI/UX Design", desc: "Futuristic, user-centric interfaces with smooth interactions.", icon: Layout, color: "text-cyber-pink" },
    { title: "Mobile Apps", desc: "Cross-platform applications using React Native.", icon: Smartphone, color: "text-cyber-purple" },
    { title: "Database Arch", desc: "Optimized SQL/NoSQL schema design for massive data.", icon: Database, color: "text-white" },
  ];

  return (
    <section id="services" className="py-20 bg-cyber-black/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-center mb-16">
          CORE <span className="text-cyber-cyan">SERVICES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group h-64 perspective-1000">
              <div className="relative h-full w-full transition-all duration-500 transform-style-3d group-hover:rotate-y-12">
                <div className="absolute inset-0 bg-cyber-dark border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-cyber-cyan/50 hover:shadow-[0_0_30px_rgba(0,245,255,0.1)] transition-all">
                  <service.icon className={`w-12 h-12 ${service.color} mb-6`} />
                  <h3 className="font-display font-bold text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;