import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCheckCircle, FiActivity, FiCode, FiLayout } = FiIcons;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hero-glow rounded-full blur-[120px] opacity-20 animate-pulse-glow pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-cyan-neon/30">
            <span className="w-2 h-2 rounded-full bg-cyan-neon animate-pulse"></span>
            <span className="text-xs font-medium text-cyan-neon uppercase tracking-wider">Next-Generation Web Agency</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            WE BUILD DIGITAL EXPERIENCES <br />
            <span className="text-gradient">THAT DRIVE GROWTH</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
            Premium Website Development, SEO Optimization, and Modern Digital Solutions for ambitious businesses ready to scale.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#contact" className="btn-primary group">
              Start Your Project
              <SafeIcon icon={FiArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#works" className="btn-secondary">
              View Portfolio
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            {[
              { text: '10+ Happy Clients' },
              { text: '10+ Projects Delivered' },
              { text: '100% Satisfaction' },
              { text: 'Affordable Pricing' }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <SafeIcon icon={FiCheckCircle} className="text-cyan-neon shrink-0" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visuals - Floating UI Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden lg:block h-[600px] w-full"
        >
          {/* Main Dashboard Mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg glass-card p-4 z-20 shadow-2xl shadow-cyan-neon/10 animate-float">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-gray-400 font-mono">dashboard.tsx</div>
            </div>
            <div className="space-y-4">
              <div className="h-44 bg-navy-950/80 rounded-lg overflow-hidden border border-white/5 relative">
                <img 
                  src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop" 
                  alt="Developer Coding Setup" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06152D] via-transparent to-transparent"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-navy-950/80 rounded-lg border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="text-[10px] text-gray-500 font-mono">index.css</div>
                  <div className="text-xs text-cyan-neon font-mono font-semibold">--cyan-neon: #00f0ff;</div>
                  <div className="absolute right-[-10px] bottom-[-10px] w-12 h-12 bg-cyan-neon/10 rounded-full blur-lg"></div>
                </div>
                <div className="h-24 bg-navy-950/80 rounded-lg border border-white/5 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="text-[10px] text-gray-500 font-mono">App.jsx</div>
                  <div className="text-xs text-purple-neon font-mono font-semibold">&lt;Hero /&gt;</div>
                  <div className="absolute right-[-10px] bottom-[-10px] w-12 h-12 bg-purple-neon/10 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Element 1 */}
          <div className="absolute top-20 right-10 glass-card p-4 z-30 animate-float-delayed">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-neon/20 flex items-center justify-center">
                <SafeIcon icon={FiCode} className="text-purple-neon" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Clean Code</div>
                <div className="text-xs text-gray-400">Zero tech debt</div>
              </div>
            </div>
          </div>

          {/* Floating Element 2 */}
          <div className="absolute bottom-32 left-0 glass-card p-4 z-30 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-electric/20 flex items-center justify-center">
                <SafeIcon icon={FiLayout} className="text-blue-electric" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Pixel Perfect</div>
                <div className="text-xs text-gray-400">Premium Design</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;