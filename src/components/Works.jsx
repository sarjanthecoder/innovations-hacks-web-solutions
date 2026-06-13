import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiGithub } = FiIcons;

const Works = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      client: "Nexus Finance",
      industry: "Financial Technology",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-Commerce Platform",
      client: "Lumina Studio",
      industry: "Retail",
      tech: ["Next.js", "Stripe", "Sanity"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SaaS Landing Page",
      client: "CloudSync",
      industry: "Software",
      tech: ["React", "GSAP", "Vite"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI Analytics Tool",
      client: "Quantum Data",
      industry: "Artificial Intelligence",
      tech: ["TypeScript", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="works" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-gray-400 max-w-xl text-lg">A selection of premium digital experiences we've crafted for forward-thinking brands.</p>
          </div>
          <button className="btn-secondary whitespace-nowrap">View All Projects</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10"
            >
              {/* Image Container */}
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>

              {/* Content Box Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="glass-panel p-6 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-xs font-bold text-cyan-neon mb-2 uppercase tracking-wider">{project.industry}</div>
                      <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-400">Client: {project.client}</p>
                    </div>
                    <div className="flex gap-3">
                      <a href="#" aria-label={`View ${project.title} live demo`} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <SafeIcon icon={FiExternalLink} className="text-white" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;