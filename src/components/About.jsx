import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiEye, FiTrendingUp, FiUsers } = FiIcons;

const About = () => {
  const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Satisfied Clients", value: "10+" },
    { label: "Years Experience", value: "1+" },
    { label: "Team Members", value: "4" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Crafting Digital <span className="text-gradient">Excellence</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Innovation Hacks Web Solutions specializes in building premium websites that combine beautiful design, exceptional performance, and business-focused functionality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-neon/10 flex items-center justify-center shrink-0">
                  <SafeIcon icon={FiTarget} className="text-cyan-neon text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To empower businesses with enterprise-grade digital experiences that are fast, beautiful, and engineered for conversion. We don't just build websites; we build growth engines.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-neon/10 flex items-center justify-center shrink-0">
                  <SafeIcon icon={FiEye} className="text-purple-neon text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To be the leading technology agency recognized for pushing the boundaries of web performance and premium interface design.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-8 text-center flex flex-col items-center justify-center min-h-[200px] group">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;