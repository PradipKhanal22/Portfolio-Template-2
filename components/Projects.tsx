import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Neon Commerce",
    description: "A futuristic e-commerce platform built with React and Laravel. Features real-time inventory and holographic product previews.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["React", "Laravel", "Tailwind", "MySQL"],
    link: "#"
  },
  {
    id: 2,
    title: "Cyber Dashboard",
    description: "Admin dashboard handling massive data visualization. Uses D3.js for charts and glow effects for alerts.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Vue", "D3.js", "Node.js"],
    link: "#"
  },
  {
    id: 3,
    title: "AI Chat Matrix",
    description: "Real-time chat application powered by Gemini API with instant translation and sentiment analysis.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["TypeScript", "Gemini API", "Socket.io"],
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">
          FEATURED <span className="text-cyber-purple">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-cyber-dark/50 border border-white/10 rounded-xl overflow-hidden hover:border-cyber-purple/50 transition-all duration-500 hover:-translate-y-2">
              
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 bg-cyber-black/90 backdrop-blur-sm">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-mono text-cyber-cyan border border-cyber-cyan/30 rounded bg-cyber-cyan/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a href={project.link} className="flex items-center gap-2 text-sm text-white hover:text-cyber-pink transition-colors">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.link} className="flex items-center gap-2 text-sm text-cyber-cyan hover:text-white transition-colors">
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;