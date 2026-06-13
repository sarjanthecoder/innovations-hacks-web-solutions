import React from 'react';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiVercel, SiGithub, SiFigma, SiDocker
} from 'react-icons/si';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      techs: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Framer Motion", icon: SiFramer, color: "text-[#F107A3]" }
      ]
    },
    {
      title: "Backend & DB",
      techs: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express.js", icon: SiExpress, color: "text-white" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" }
      ]
    },
    {
      title: "Tools & Deploy",
      techs: [
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
        { name: "AWS", icon: FaAws, color: "text-[#FF9900]" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-navy-900/20 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Modern <span className="text-gradient">Tech Stack</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">We use the latest enterprise-grade technologies to build robust solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-white/90 border-b border-white/10 pb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.techs.map((tech, i) => {
                  const IconComponent = tech.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cyan-neon/50 hover:text-cyan-neon transition-all duration-300 cursor-default group">
                      <IconComponent className={`text-base ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;