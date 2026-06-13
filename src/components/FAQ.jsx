import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiMinus } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "How long does it take to build a premium website?", a: "A typical business website takes 4-6 weeks from discovery to launch. Complex web applications may take 2-4 months depending on the feature set and integrations required." },
    { q: "Do you provide ongoing maintenance and support?", a: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your website remains secure, fast, and up-to-date with the latest technologies." },
    { q: "Will my website be optimized for SEO?", a: "Absolutely. Semantic HTML, fast load times, mobile responsiveness, and proper meta structures are built into our development process by default." },
    { q: "What is your pricing model?", a: "We offer project-based pricing tailored to your specific requirements. We focus on delivering high ROI rather than just building cheap commodities. Contact us for a custom quote." }
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass-card overflow-hidden">
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-bold text-lg">{faq.q}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-cyan-neon text-navy-950' : 'bg-white/5 text-white'}`}>
                <SafeIcon icon={openIndex === index ? FiMinus : FiPlus} />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 text-gray-400 border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;