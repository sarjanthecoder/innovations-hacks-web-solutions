import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLayout, FiBriefcase, FiShoppingCart, FiMonitor, FiRefreshCw, FiSearch, FiTool, FiCpu, FiServer, FiTerminal } = FiIcons;

const Services = () => {
  const services = [
    { icon: FiBriefcase, title: "Business Websites", desc: "Corporate sites built for trust and conversion.", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop" },
    { icon: FiMonitor, title: "Portfolio Websites", desc: "Showcase your work with stunning aesthetics.", img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800&auto=format&fit=crop" },
    { icon: FiShoppingCart, title: "E-Commerce", desc: "High-converting online stores that sell.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" },
    { icon: FiLayout, title: "Landing Pages", desc: "Optimized single pages for marketing campaigns.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
    { icon: FiRefreshCw, title: "Website Redesign", desc: "Modernize your outdated digital presence.", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop" },
    { icon: FiSearch, title: "SEO Optimization", desc: "Climb the search rankings organically.", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop" },
    { icon: FiCpu, title: "AI Integrations", desc: "Implement smart features to automate tasks.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop" },
    { icon: FiTerminal, title: "Custom Web Apps", desc: "Complex scalable SaaS applications.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section id="services" className="py-24 bg-navy-900/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Premium <span className="text-gradient">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive digital solutions tailored for modern businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden glass-card p-6 group cursor-pointer hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/90 via-[#0a0f1c]/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-navy-800 flex items-center justify-center mb-6 group-hover:bg-cyan-neon/20 transition-colors duration-300">
                  <SafeIcon icon={service.icon} className="text-2xl text-gray-400 group-hover:text-cyan-neon transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-neon transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                
                <div className="flex items-center text-sm font-medium text-cyan-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <SafeIcon icon={FiIcons.FiArrowRight} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;