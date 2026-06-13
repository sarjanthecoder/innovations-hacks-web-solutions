import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMessageSquare, FiExternalLink } = FiIcons;

const Testimonials = () => {
  const reviews = [
    {
      text: "Innovation Hacks Web Solutions built an incredibly fast and modern platform for our property business in the UK. The user engagement has doubled since launch.",
      author: "George Bennett",
      role: "Managing Director, Propcare NW (UK)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      projectLink: "https://www.propcarenw.co.uk/"
    },
    {
      text: "The team translated our vision into an outstanding website. The custom interactive components and speed optimization are top-notch.",
      author: "Rajesh Kumar",
      role: "Co-Founder, Velgo (velgo.in)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      projectLink: "https://www.velgo.in/"
    },
    {
      text: "Their attention to detail and design quality is absolute. Our brand authority has reached new levels thanks to this premium website.",
      author: "Elena Rodriguez",
      role: "Product Lead, TechVantage",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      projectLink: "https://aravinthtech.in/"
    }
  ];

  return (
    <section className="py-24 bg-navy-900/20 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-neon/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Don't just take our word for it. See what our partners say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 relative flex flex-col justify-between"
            >
              <div>
                <SafeIcon icon={FiMessageSquare} className="absolute top-6 right-6 text-4xl text-white/5" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="text-yellow-400 fill-yellow-400 text-sm" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">"{review.text}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full border border-white/20 object-cover" loading="lazy" />
                <div>
                  <div className="font-bold text-white">{review.author}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                  {review.projectLink && (
                    <a 
                      href={review.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-semibold text-cyan-neon hover:text-cyan-neon/80 hover:underline transition-all duration-300 flex items-center gap-1 mt-1.5"
                    >
                      Click to view <SafeIcon icon={FiExternalLink} className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;