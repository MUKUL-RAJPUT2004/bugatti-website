import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaHome, FaCar, FaCog, FaHistory, FaPalette, FaChartLine } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'history', 'models', 'engines', 'performance', 'customizer'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'history', label: 'Heritage', icon: FaHistory },
    { id: 'models', label: 'Models', icon: FaCar },
    { id: 'engines', label: 'Engineering', icon: FaCog },
    { id: 'performance', label: 'Performance', icon: FaChartLine },
    { id: 'customizer', label: 'Customize', icon: FaPalette }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/30 backdrop-blur-3xl border-b border-gray-500/30 shadow-2xl' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-gray-700/10 to-gray-900/10"></div>
        
        <div className="max-w-8xl mx-auto px-4 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            <motion.div 
              className="flex-shrink-0 cursor-pointer group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <motion.span 
                  className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 tracking-wider"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  BUGATTI
                </motion.span>
                <motion.div 
                  className="absolute -inset-3 bg-gradient-to-r from-gray-600/20 to-gray-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </motion.div>
            
            <div className="hidden lg:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-6 py-3 text-sm font-semibold transition-all duration-500 rounded-lg group ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-gray-700/40 to-gray-600/40 border border-gray-400/30 shadow-lg shadow-gray-500/25'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center space-x-2">
                        <IconComponent size={16} className={`${activeSection === item.id ? 'text-gray-300' : ''}`} />
                        <span>{item.label}</span>
                      </span>
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-gray-600/30 rounded-lg border border-gray-400/30"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{
                          boxShadow: "0 0 20px rgba(156, 163, 175, 0.4)"
                        }}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-gray-400/20"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiX size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiMenuAlt3 size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden bg-black/20 backdrop-blur-3xl border-t border-gray-400/20"
            >
              <div className="px-6 py-6 space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center space-x-4 w-full text-left px-6 py-4 text-white hover:bg-white/10 rounded-lg transition-all duration-300 border border-gray-400/10 hover:border-gray-400/30"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent size={20} className="text-gray-300" />
                      <span className="font-medium text-lg">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 z-50 origin-left"
        style={{
          scaleX: useTransform(scrollYProgress, [0, 1], [0, 1])
        }}
      >
        <div className="h-full bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 blur-sm"></div>
      </motion.div>
    </>
  );
};

export default Navbar;