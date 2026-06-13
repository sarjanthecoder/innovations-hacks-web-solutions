import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign, FiStar, FiZap, FiSearch, FiSmartphone, FiShield, FiClock, FiHeart } = FiIcons;

const WhyChooseUs = () => {
  const features = [
    { icon: FiStar, title: "Premium Design", desc: "Apple-level polish and aesthetics.", colSpan: "md:col-span-2", rowSpan: "md:row-span-2", color: "text-purple-neon" },
    { icon: FiZap, title: "High Performance", desc: "Lighthouse 95+ guaranteed.", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", color: "text-cyan-neon" },
    { icon: FiSearch, title: "SEO Optimized", desc: "Built for search engines.", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", color: "text-blue-electric" },
    { icon: FiSmartphone, title: "Mobile Responsive", desc: "Flawless on all devices.", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", color: "text-pink-500" },
    { icon: FiDollarSign, title: "Affordable Pricing", desc: "Enterprise quality, startup prices.", colSpan: "md:col-span-1", rowSpan: "md:row-span-1", color: "text-green-400" },
    { icon: FiShield, title: "Secure Development", desc: "Best-in-class security practices.", colSpan: "md:col-span-2", rowSpan: "md:row-span-1", color: "text-yellow-400" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-neon/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-gradient">Us</span></h2>
          <p className="text-gray-400 max-w-2xl text-lg">We don't compromise on quality. Every project is built to the highest industry standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[160px] gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-6 flex flex-col justify-between group overflow-hidden relative ${feature.colSpan} ${feature.rowSpan}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <SafeIcon icon={feature.icon} className={`text-2xl ${feature.color}`} />
              </div>
              
              {feature.rowSpan === 'md:row-span-2' && (
                <div className="my-2 relative h-36 w-full rounded-lg bg-[#030914]/80 border border-white/5 overflow-hidden flex flex-col p-3 group-hover:border-cyan-neon/30 transition-colors duration-300 z-10">
                  {/* Browser Header */}
                  <div className="flex items-center gap-1.5 mb-3 border-b border-white/5 pb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    <span className="text-[10px] text-gray-500 ml-2 font-mono">innovationhacks.in</span>
                  </div>
                  {/* Mock Code Block */}
                  <div className="space-y-1.5 font-mono text-[10px] text-gray-400 select-none">
                    <div><span className="text-purple-neon">const</span> agency = <span className="text-[#00f0ff]">"Innovation Hacks"</span>;</div>
                    <div><span className="text-purple-neon">const</span> clients = [<span className="text-emerald-400">"Propcare NW"</span>, <span className="text-emerald-400">"Velgo"</span>];</div>
                    <div><span className="text-purple-neon">const</span> status = <span className="text-yellow-400">"🚀 Active & Growing"</span>;</div>
                  </div>
                  {/* Glow Light Effect */}
                  <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-cyan-neon/20 rounded-full blur-xl group-hover:bg-purple-neon/20 transition-all duration-300"></div>
                </div>
              )}
              
              <div className="relative z-10">
                <h3 className={`font-bold mb-1 ${feature.rowSpan === 'md:row-span-2' ? 'text-2xl' : 'text-lg'}`}>{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;