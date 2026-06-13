import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCommand, FiGlobe, FiLinkedin, FiInstagram, FiMail } = FiIcons;

const Footer = () => {
  const socialLinks = [
    { icon: FiInstagram, href: "https://www.instagram.com/innovationhacks.in", label: "Instagram" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/company/115303974", label: "LinkedIn" },
    { icon: FiGlobe, href: "https://www.innovationhacks.in", label: "Website" },
    { icon: FiMail, href: "mailto:innovationhacksofficial@gmail.com", label: "Email" }
  ];

  return (
    <footer className="border-t border-white/10 bg-[#02050A] pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-neon to-blue-electric flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo_white.png" 
                    alt="Innovation Hacks Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight leading-none">
                INNOVATION<span className="text-cyan-neon">HACKS</span>
                <span className="block text-[9px] font-semibold text-gray-400 tracking-[0.25em] mt-0.5">WEB SOLUTIONS</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
              Building next-generation digital experiences that combine stunning design with enterprise-grade performance. Visit us at <a href="https://www.innovationhacks.in" target="_blank" rel="noopener noreferrer" className="text-cyan-neon hover:underline">www.innovationhacks.in</a>
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-neon hover:border-cyan-neon transition-colors">
                  <SafeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-cyan-neon transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-neon transition-colors">Services</a></li>
              <li><a href="#works" className="hover:text-cyan-neon transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-cyan-neon transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="mailto:innovationhacksofficial@gmail.com" className="hover:text-cyan-neon transition-colors">innovationhacksofficial@gmail.com</a></li>
              <li><a href="https://www.innovationhacks.in" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-neon transition-colors">www.innovationhacks.in</a></li>
              <li><a href="https://www.instagram.com/innovationhacks.in" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-neon transition-colors">@innovationhacks.in</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Innovation Hacks Web Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Designed with <span className="text-red-500 mx-1">♥</span> by Innovation Hacks
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;