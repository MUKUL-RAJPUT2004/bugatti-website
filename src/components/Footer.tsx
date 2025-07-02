import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  const footerLinks = [
    {
      title: 'Models',
      links: ['Chiron', 'Chiron Sport', 'Chiron Super Sport', 'Bolide']
    },
    {
      title: 'Company',
      links: ['About', 'Heritage', 'News', 'Careers']
    },
    {
      title: 'Support',
      links: ['Service', 'Parts', 'Warranty', 'Documentation']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookies', 'Imprint']
    }
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300 mb-6">
                BUGATTI
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                For over a century, Bugatti has represented the pinnacle of automotive artistry, combining French elegance with uncompromising performance.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconComponent size={20} className="text-gray-300" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-white font-bold text-lg mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: linkIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Bugatti Automobiles S.A.S. All rights reserved.
          </p>
          <motion.div 
            className="flex items-center space-x-2 text-gray-400 text-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-bold">Inspired by Bugatti and for its love, developed by</span>
            <span className="font-black text-white">Mukul Rajput</span>
            <FaHeart className="text-red-500 animate-pulse" size={16} />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;