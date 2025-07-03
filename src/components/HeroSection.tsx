import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPlay, FaChevronDown } from 'react-icons/fa';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Hero Background with Stunning Bugatti Side View */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Bugatti Chiron Side View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Animated Metallic Grid Overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="grid grid-cols-20 grid-rows-12 h-full w-full">
          {Array.from({ length: 240 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-gray-400/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{
                duration: 8,
                delay: i * 0.02,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Metallic Lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-gray-300/60 to-transparent"
          style={{
            width: '100%',
            top: `${10 + i * 8}%`,
            left: 0
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* 3D Floating Elements */}
      <motion.div
        style={{ 
          y, 
          opacity, 
          scale,
          x: mousePosition.x,
          rotateY: mousePosition.x * 0.02,
          rotateX: mousePosition.y * 0.02
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 border border-gray-400/30 rotate-45"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [45, 225, 45],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 h-full flex items-center justify-center text-center px-4"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.h1 
              className="text-4xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300 mb-8 tracking-tight leading-none"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              BUGATTI
            </motion.h1>
            <motion.div 
              className="h-2 w-40 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-8"
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="mb-16"
          >
            <p className="text-2xl md:text-5xl text-white mb-6 font-light tracking-wide">
              Automotive Artistry.
            </p>
            <p className="text-lg md:text-2xl text-gray-200 mb-6 font-light tracking-wide max-w-4xl mx-auto">
              Where engineering excellence meets uncompromising luxury. Experience the pinnacle of automotive craftsmanship.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 60px rgba(156, 163, 175, 0.6)",
                y: -8
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-12 py-6 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-500 shadow-2xl border border-gray-400/30"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
              />
              <span className="relative flex items-center space-x-3 text-lg">
                <span>Explore Collection</span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaChevronDown className="rotate-[-90deg]" size={20} />
                </motion.div>
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group px-12 py-6 border-2 border-gray-400/40 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-500 backdrop-blur-sm text-lg relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span className="relative flex items-center space-x-3">
                <FaPlay size={20} />
                <span>Watch Legacy</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-sm flex flex-col items-center space-y-4"
        >
          <span className="text-gray-200 font-light tracking-widest uppercase text-xs">Discover Excellence</span>
          <div className="relative w-8 h-12 border-2 border-gray-400/40 rounded-full flex justify-center overflow-hidden">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-4 bg-gradient-to-b from-gray-400 to-gray-300 rounded-full mt-2"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;