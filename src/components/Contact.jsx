import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiGlobe, FiInstagram, FiLinkedin, FiSend, FiUsers, FiPhone, FiMapPin, FiGithub, FiChevronDown, FiArrowUp } = FiIcons;

const teamMembers = [
  { 
    name: "Karthickkumar S", 
   
    role: "Founder & CEO", 
    website: "https://www.karthick.site",
    email: "veerakarthick235@gmail.com",
    phone: "+91 7305157325",
    location: "Krishnagiri, Tamil Nadu",
    avatar: "https://github.com/veerakarthick235.png",
    github: "https://github.com/veerakarthick235",
    linkedin: "https://www.linkedin.com/in/karthickkumar-s-b04a10348",
    instagram: "https://www.instagram.com/veerakarthick_235/"
  },
  { 
    name: "Sarjan P", 
    role: "Co-Founder & CTO", 
    website: "https://www.sarjanp.in",
    email: "sarjan6325@gmail.com",
    phone: "+91 6385562064",
    location: "Dharmapuri, Tamil Nadu",
    avatar: "https://github.com/sarjanthecoder.png",
    github: "https://github.com/sarjanthecoder",
    linkedin: "https://www.linkedin.com/in/sarjan-p-7a97862a0",
    instagram: "https://www.instagram.com/lonely_boy_official_2k"
  },
  { 
    name: "Lokesh M", 
    role: "Manager", 
    website: "https://www.lokeshloki.in",
    email: "lokesh152005@gmail.com",
    phone: "+91 8072894184",
    location: "Vellore, Tamil Nadu",
    avatar: "https://github.com/lokeshloki65.png",
    github: "https://github.com/lokeshloki65",
    linkedin: "https://linkedin.com/in/lokesh-m-265b832b3/",
    instagram: "https://instagram.com/lovely_loki._65"
  },
  { 
    name: "Nishanth K", 
    role: "Developer", 
    website: "https://www.nishanthk.site",
    email: "knhnishanth@gmail.com",
    phone: "+91 8807723993",
    location: "Hosur, Tamil Nadu",
    avatar: "https://github.com/NishanthKarthikeyan.png",
    github: "https://github.com/NishanthKarthikeyan",
    linkedin: "https://www.linkedin.com/in/nishanthkhosur/",
    instagram: "https://www.instagram.com/__.nichu_xd.__/"
  }
];

const gradients = [
  "from-cyan-neon to-blue-electric",
  "from-purple-neon to-pink-500",
  "from-blue-electric to-cyan-neon",
  "from-pink-500 to-purple-neon"
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'd3944572-f8c5-4f05-8983-7a72c4094463',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          from_name: 'Innovation Hacks Web Solutions Website',
          subject: `New Project Inquiry from ${formData.name}`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: '🎉 Message sent successfully! We\'ll get back to you soon.' });
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={contactRef} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-blue-electric/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our <span className="text-gradient">Team</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">The passionate minds behind Innovation Hacks Web Solutions.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300 text-left"
              >
                {/* Avatar */}
                <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br ${gradients[index]} p-[3px] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-neon/20`}>
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-full rounded-full object-cover bg-navy-950"
                  />
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white mb-0.5 group-hover:text-cyan-neon transition-colors">{member.name}</h3>
                  {member.aka && <p className="text-xs text-gray-500 italic mb-1">({member.aka})</p>}
                  <p className="text-sm font-medium text-cyan-neon/80">{member.role}</p>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-400 hover:text-cyan-neon transition-colors truncate">
                    <SafeIcon icon={FiMail} className="shrink-0 text-sm" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-400 hover:text-cyan-neon transition-colors">
                    <SafeIcon icon={FiPhone} className="shrink-0 text-sm" />
                    <span>{member.phone}</span>
                  </a>
                  <a href={member.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-cyan-neon transition-colors truncate">
                    <SafeIcon icon={FiGlobe} className="shrink-0 text-sm" />
                    <span className="truncate">{member.website.replace('https://', '')}</span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-400">
                    <SafeIcon icon={FiMapPin} className="shrink-0 text-sm" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Social Links */}
                {(member.github || member.linkedin || member.instagram || member.website) && (
                  <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-white/5">
                    {member.website && (
                      <a href={member.website} target="_blank" rel="noopener noreferrer" title={`${member.name} Portfolio Website`} aria-label={`${member.name} Portfolio Website`} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-neon hover:bg-purple-neon/10 transition-colors">
                        <SafeIcon icon={FiGlobe} className="text-sm" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" title={`${member.name} GitHub Profile`} aria-label={`${member.name} GitHub Profile`} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-neon hover:bg-cyan-neon/10 transition-colors">
                        <SafeIcon icon={FiGithub} className="text-sm" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title={`${member.name} LinkedIn Profile`} aria-label={`${member.name} LinkedIn Profile`} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-blue-electric hover:bg-blue-electric/10 transition-colors">
                        <SafeIcon icon={FiLinkedin} className="text-sm" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" title={`${member.name} Instagram Profile`} aria-label={`${member.name} Instagram Profile`} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 transition-colors">
                        <SafeIcon icon={FiInstagram} className="text-sm" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Build Something <span className="text-gradient">Amazing</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Ready to elevate your digital presence? Reach out to Innovation Hacks Web Solutions and let's discuss how we can help your business grow.
            </p>

            <div className="space-y-6">
              <a href="mailto:innovationhacksofficial@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-cyan-neon group-hover:bg-cyan-neon/10 transition-colors">
                  <SafeIcon icon={FiMail} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email Us</div>
                  <div className="font-medium group-hover:text-cyan-neon transition-colors">innovationhacksofficial@gmail.com</div>
                </div>
              </a>
              <a href="https://www.innovationhacks.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-purple-neon group-hover:bg-purple-neon/10 transition-colors">
                  <SafeIcon icon={FiGlobe} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Visit Website</div>
                  <div className="font-medium group-hover:text-purple-neon transition-colors">www.innovationhacks.in</div>
                </div>
              </a>
              <a href="https://www.instagram.com/innovationhacks.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-pink-500 group-hover:bg-pink-500/10 transition-colors">
                  <SafeIcon icon={FiInstagram} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Follow on Instagram</div>
                  <div className="font-medium group-hover:text-pink-500 transition-colors">@innovationhacks.in</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/115303974" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-blue-electric group-hover:bg-blue-electric/10 transition-colors">
                  <SafeIcon icon={FiLinkedin} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Connect on LinkedIn</div>
                  <div className="font-medium group-hover:text-blue-electric transition-colors">Innovation Hacks Web Solutions</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="d3944572-f8c5-4f05-8983-7a72c4094463" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Company (Optional)</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon transition-colors" placeholder="Your Company Ltd." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Service Needed</label>
                  <div className="relative">
                    <select 
                      name="service" 
                      value={formData.service} 
                      onChange={handleChange} 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon transition-colors appearance-none cursor-pointer pr-10"
                    >
                      <option value="" className="bg-navy-950 text-gray-400">Select a Service</option>
                      <option value="Business Websites" className="bg-navy-950 text-white">Business Websites</option>
                      <option value="Portfolio Websites" className="bg-navy-950 text-white">Portfolio Websites</option>
                      <option value="E-Commerce" className="bg-navy-950 text-white">E-Commerce</option>
                      <option value="Landing Pages" className="bg-navy-950 text-white">Landing Pages</option>
                      <option value="Website Redesign" className="bg-navy-950 text-white">Website Redesign</option>
                      <option value="SEO Optimization" className="bg-navy-950 text-white">SEO Optimization</option>
                      <option value="AI Integrations" className="bg-navy-950 text-white">AI Integrations</option>
                      <option value="Custom Web Apps" className="bg-navy-950 text-white">Custom Web Apps</option>
                      <option value="Other" className="bg-navy-950 text-white">Other / Custom Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
                      <SafeIcon icon={FiChevronDown} className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Project Details</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-neon transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg text-sm font-medium ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={loading} className={`w-full btn-primary py-4 text-base ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <SafeIcon icon={FiSend} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.8 }}
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to top of the page"
            className="fixed bottom-8 right-8 z-50 p-4 rounded-xl bg-gradient-to-br from-cyan-neon to-blue-electric text-navy-950 font-bold shadow-lg shadow-cyan-neon/30 hover:scale-110 active:scale-95 transition-transform cursor-pointer"
          >
            <SafeIcon icon={FiArrowUp} className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;