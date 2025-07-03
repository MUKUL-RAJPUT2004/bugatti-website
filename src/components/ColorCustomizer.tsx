import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck, FaCar, FaStar, FaMagic, FaDownload, FaShare } from 'react-icons/fa';

const ColorCustomizer = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedModel, setSelectedModel] = useState('chiron');

  const colors = [
    { 
      id: 'blue', 
      name: 'Atlantic Blue', 
      value: '#1e40af', 
      gradient: 'from-blue-600 to-blue-800',
      carColors: {
        primary: '#1e40af',
        secondary: '#1e3a8a',
        accent: '#3b82f6'
      }
    },
    { 
      id: 'red', 
      name: 'Rouge Sang', 
      value: '#dc2626', 
      gradient: 'from-red-600 to-red-800',
      carColors: {
        primary: '#dc2626',
        secondary: '#991b1b',
        accent: '#ef4444'
      }
    },
    { 
      id: 'black', 
      name: 'Noir Carbon', 
      value: '#111827', 
      gradient: 'from-gray-900 to-black',
      carColors: {
        primary: '#111827',
        secondary: '#000000',
        accent: '#374151'
      }
    },
    { 
      id: 'white', 
      name: 'Blanc Pur', 
      value: '#f8fafc', 
      gradient: 'from-gray-100 to-white',
      carColors: {
        primary: '#f8fafc',
        secondary: '#e2e8f0',
        accent: '#ffffff'
      }
    },
    { 
      id: 'silver', 
      name: 'Argent Métallique', 
      value: '#6b7280', 
      gradient: 'from-gray-500 to-gray-700',
      carColors: {
        primary: '#6b7280',
        secondary: '#4b5563',
        accent: '#9ca3af'
      }
    },
    { 
      id: 'gold', 
      name: 'Or Élégant', 
      value: '#d97706', 
      gradient: 'from-yellow-600 to-amber-700',
      carColors: {
        primary: '#d97706',
        secondary: '#b45309',
        accent: '#f59e0b'
      }
    }
  ];

  const models = [
    { 
      id: 'chiron', 
      name: 'Chiron', 
      baseImage: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      specs: { power: '1,479 HP', topSpeed: '261 mph', acceleration: '2.4s' }
    },
    { 
      id: 'chiron-sport', 
      name: 'Chiron Sport', 
      baseImage: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      specs: { power: '1,479 HP', topSpeed: '261 mph', acceleration: '2.3s' }
    },
    { 
      id: 'divo', 
      name: 'Divo', 
      baseImage: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      specs: { power: '1,479 HP', topSpeed: '236 mph', acceleration: '2.4s' }
    }
  ];

  const selectedModelData = models.find(model => model.id === selectedModel);
  const selectedColorData = colors.find(color => color.id === selectedColor);

  const generateCarSVG = () => {
    const colors = selectedColorData?.carColors;
    return (
      <svg viewBox="0 0 400 200" className="w-full h-full">
        <defs>
          <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors?.primary} />
            <stop offset="50%" stopColor={colors?.secondary} />
            <stop offset="100%" stopColor={colors?.accent} />
          </linearGradient>
          <filter id="shadow">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Car Body */}
        <path
          d="M50 120 L80 80 L120 70 L280 70 L320 80 L350 120 L350 140 L320 150 L80 150 L50 140 Z"
          fill="url(#carGradient)"
          filter="url(#shadow)"
        />
        
        {/* Windshield */}
        <path
          d="M90 80 L110 75 L290 75 L310 80 L300 90 L100 90 Z"
          fill="rgba(200,220,255,0.3)"
          stroke={colors?.accent}
          strokeWidth="1"
        />
        
        {/* Wheels */}
        <circle cx="100" cy="140" r="20" fill="#2d3748" stroke={colors?.accent} strokeWidth="2"/>
        <circle cx="300" cy="140" r="20" fill="#2d3748" stroke={colors?.accent} strokeWidth="2"/>
        <circle cx="100" cy="140" r="12" fill={colors?.secondary}/>
        <circle cx="300" cy="140" r="12" fill={colors?.secondary}/>
        
        {/* Headlights */}
        <ellipse cx="340" cy="100" rx="8" ry="12" fill="#ffffff" opacity="0.9"/>
        <ellipse cx="340" cy="100" rx="4" ry="8" fill={colors?.accent}/>
        
        {/* Side Details */}
        <path
          d="M80 110 L320 110 L315 120 L85 120 Z"
          fill={colors?.accent}
          opacity="0.7"
        />
        
        {/* Door Lines */}
        <line x1="150" y1="80" x2="150" y2="140" stroke={colors?.secondary} strokeWidth="1" opacity="0.5"/>
        <line x1="250" y1="80" x2="250" y2="140" stroke={colors?.secondary} strokeWidth="1" opacity="0.5"/>
      </svg>
    );
  };

  return (
    <section id="customizer" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(156,163,175,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(107,114,128,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Color Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${colors[i % colors.length].gradient} opacity-30`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300 mb-6 tracking-tight"
          >
            Customize Your Bugatti
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-8"
          />
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the art of personalization. Choose your perfect Bugatti configuration and watch it transform in real-time.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Car Display with Real-time Color Change */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-400/10 overflow-hidden">
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${selectedColorData?.gradient} opacity-10`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Car Visualization */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedModel}-${selectedColor}`}
                  className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50"
                  initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  {/* SVG Car with Dynamic Colors */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <motion.div
                      className="w-full h-full"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotateY: [0, 5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {generateCarSVG()}
                    </motion.div>
                  </div>
                  
                  {/* Sparkle Effect */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </motion.div>
              </AnimatePresence>
              
              {/* Enhanced Info Card */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div 
                  className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-400/30"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2 flex items-center">
                        <FaStar className="mr-2 text-yellow-400" />
                        {selectedModelData?.name}
                      </h4>
                      <p className="text-gray-300">{selectedColorData?.name}</p>
                    </div>
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedColorData?.gradient} border-2 border-white/30`}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  
                  {/* Specs Display */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-gray-400 text-xs">Power</p>
                      <p className="text-white font-bold text-sm">{selectedModelData?.specs.power}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Top Speed</p>
                      <p className="text-white font-bold text-sm">{selectedModelData?.specs.topSpeed}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">0-60mph</p>
                      <p className="text-white font-bold text-sm">{selectedModelData?.specs.acceleration}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Customization Controls */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Model Selection */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-400/10"
              whileHover={{ scale: 1.02, borderColor: 'rgba(156,163,175,0.3)' }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCar size={24} className="text-gray-200" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Select Model</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {models.map((model, index) => (
                  <motion.button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`relative p-4 rounded-xl border transition-all duration-300 ${
                      selectedModel === model.id
                        ? 'border-gray-400/40 bg-gray-800/50 shadow-lg'
                        : 'border-gray-400/20 bg-gray-900/30 hover:border-gray-400/30'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-white font-medium block">{model.name}</span>
                        <span className="text-gray-400 text-sm">{model.specs.power}</span>
                      </div>
                      <AnimatePresence>
                        {selectedModel === model.id && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            className="w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center"
                          >
                            <FaCheck size={12} className="text-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Color Selection */}
            <motion.div 
              className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-400/10"
              whileHover={{ scale: 1.02, borderColor: 'rgba(156,163,175,0.3)' }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  className="p-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaPalette size={24} className="text-gray-200" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Choose Color</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {colors.map((color, index) => (
                  <motion.button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`relative p-4 rounded-xl border transition-all duration-300 ${
                      selectedColor === color.id
                        ? 'border-gray-400/40 bg-gray-800/50 shadow-lg'
                        : 'border-gray-400/20 bg-gray-900/30 hover:border-gray-400/30'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${color.gradient} border-2 border-gray-400/30`}
                        animate={selectedColor === color.id ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 360]
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: selectedColor === color.id ? Infinity : 0
                        }}
                      />
                      <div className="text-left flex-1">
                        <p className="text-white font-medium text-sm">{color.name}</p>
                        <p className="text-gray-400 text-xs">{color.value}</p>
                      </div>
                      <AnimatePresence>
                        {selectedColor === color.id && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            className="w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center"
                          >
                            <FaCheck size={12} className="text-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 40px rgba(156, 163, 175, 0.6)",
                  y: -5
                }}
                whileTap={{ scale: 0.98 }}
                className="py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-500 border border-gray-400/20 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative flex items-center justify-center space-x-2">
                  <FaMagic />
                  <span>Configure</span>
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="py-4 border-2 border-gray-400/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
              >
                <span className="relative flex items-center justify-center space-x-2">
                  <FaShare />
                  <span>Share</span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ColorCustomizer;