import React from 'react';
import { Code2, Database, Layout, Server, Terminal, Cpu } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'HTML5', level: 95, icon: 'Layout', category: 'Frontend' },
  { name: 'CSS3', level: 95, icon: 'Layout', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: 'Code2', category: 'Frontend' },
  { name: 'JavaScript', level: 92, icon: 'Terminal', category: 'Frontend' },
  { name: 'React', level: 88, icon: 'Cpu', category: 'Frontend' },
  { name: 'PHP', level: 80, icon: 'Server', category: 'Backend' },
  { name: 'Laravel', level: 85, icon: 'Server', category: 'Backend' },
  { name: 'SQL', level: 85, icon: 'Database', category: 'Backend' },
  { name: 'Postman', level: 90, icon: 'Terminal', category: 'Tools' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-black/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            TECHNICAL <span className="text-cyber-cyan">ARSENAL</span>
          </h2>
          <div className="w-24 h-1 bg-cyber-pink mx-auto rounded-full shadow-[0_0_10px_#FF0099]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-cyber-dark border border-white/5 p-6 rounded-xl overflow-hidden hover:border-cyber-cyan/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]"
            >
              {/* Background Glow */}
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-cyber-cyan/10 rounded-full blur-2xl group-hover:bg-cyber-cyan/20 transition-all"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-cyber-cyan">
                  {/* Icon Mapping Placeholder - using generic icons for simplicity based on category */}
                  {skill.category === 'Frontend' ? <Code2 className="w-8 h-8 text-cyber-cyan" /> :
                   skill.category === 'Backend' ? <Database className="w-8 h-8 text-cyber-purple" /> :
                   <Terminal className="w-8 h-8 text-cyber-pink" />}
                </div>
                
                <h3 className="font-display font-bold text-lg text-gray-200 group-hover:text-white mb-2">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mt-2">
                  <div 
                    className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-purple" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 mt-2 font-mono">{skill.level}% SYNCHRONIZED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;