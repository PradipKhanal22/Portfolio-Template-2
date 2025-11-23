import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Experience } from '../types';

const experienceData: Experience[] = [
  {
    id: 1,
    role: "Senior Full Stack Dev",
    company: "TechNova Corp",
    period: "2021 - Present",
    description: "Leading a team of 5 developers building scalable React applications."
  },
  {
    id: 2,
    role: "Frontend Specialist",
    company: "CyberSystems Inc",
    period: "2018 - 2021",
    description: "Developed high-performance UI components using Vue and Tailwind."
  }
];

const educationData: Experience[] = [
  {
    id: 1,
    role: "BS Computer Science",
    company: "Future University",
    period: "2014 - 2018",
    description: "Specialized in Artificial Intelligence and Human-Computer Interaction."
  }
];

const TimelineItem: React.FC<{ item: Experience; isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 group">
    
    {/* Time Display (Left on Desktop) */}
    <div className="md:col-span-2 md:text-right mb-2 md:mb-0">
      <span className="inline-block px-3 py-1 bg-white/5 border border-cyber-cyan/30 rounded-full text-cyber-cyan text-sm font-mono">
        {item.period}
      </span>
    </div>

    {/* Center Dot & Line */}
    <div className="absolute left-0 md:left-1/2 md:-ml-3 w-6 h-full flex flex-col items-center">
      <div className="w-6 h-6 rounded-full bg-cyber-black border-2 border-cyber-pink shadow-[0_0_10px_#FF0099] z-10 group-hover:scale-125 transition-transform duration-300"></div>
      {!isLast && <div className="flex-1 w-0.5 bg-gradient-to-b from-cyber-pink to-cyber-purple/50 my-2"></div>}
    </div>

    {/* Content (Right on Desktop) */}
    <div className="md:col-span-2 pb-12">
      <div className="bg-white/5 p-6 rounded-xl border border-white/5 group-hover:border-cyber-pink/50 transition-all duration-300 hover:bg-white/10">
        <h4 className="font-display font-bold text-xl text-white">{item.role}</h4>
        <div className="text-cyber-purple font-medium mb-2">{item.company}</div>
        <p className="text-gray-400 text-sm">{item.description}</p>
      </div>
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyber-cyan/10 rounded-lg">
              <Briefcase className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h2 className="text-3xl font-display font-bold">Experience Log</h2>
          </div>
          <div className="relative">
            {experienceData.map((item, index) => (
              <TimelineItem key={item.id} item={item} isLast={index === experienceData.length - 1} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyber-purple/10 rounded-lg">
              <GraduationCap className="w-8 h-8 text-cyber-purple" />
            </div>
            <h2 className="text-3xl font-display font-bold">Education Data</h2>
          </div>
          <div className="relative">
            {educationData.map((item, index) => (
              <TimelineItem key={item.id} item={item} isLast={index === educationData.length - 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;