import React from 'react';
import { motion } from 'framer-motion';

const Workflow = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and technical requirements." },
    { num: "02", title: "Strategy", desc: "Creating a comprehensive roadmap, wireframes, and architectural plan." },
    { num: "03", title: "Design", desc: "Crafting premium UI/UX designs that align with your brand identity." },
    { num: "04", title: "Development", desc: "Writing clean, performant code using cutting-edge technologies." },
    { num: "05", title: "Testing", desc: "Rigorous QA testing across all devices, browsers, and performance metrics." },
    { num: "06", title: "Launch", desc: "Seamless deployment to production with zero downtime." },
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Process</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">A systematic approach to delivering excellence, consistently.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-neon/30 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-xl font-bold text-cyan-neon mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 relative bg-navy-950">
                  {step.num}
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full border border-cyan-neon/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;