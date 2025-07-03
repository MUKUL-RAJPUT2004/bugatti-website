import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck, FaCar, FaStar, FaMagic, FaShare } from 'react-icons/fa';

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
        accent: '#3b82f6',
        metallic: '#60a5fa'
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
        accent: '#ef4444',
        metallic: '#f87171'
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
        accent: '#374151',
        metallic: '#6b7280'
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
        accent: '#ffffff',
        metallic: '#f1f5f9'
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
        accent: '#9ca3af',
        metallic: '#d1d5db'
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
        accent: '#f59e0b',
        metallic: '#fbbf24'
      }
    }
  ];

  const models = [
    { 
      id: 'chiron', 
      name: 'Chiron', 
      specs: { power: '1,479 HP', topSpeed: '261 mph', acceleration: '2.4s' }
    },
    { 
      id: 'chiron-sport', 
      name: 'Chiron Sport', 
      specs: { power: '1,479 HP', topSpeed: '261 mph', acceleration: '2.3s' }
    },
    { 
      id: 'divo', 
      name: 'Divo', 
      specs: { power: '1,479 HP', topSpeed: '236 mph', acceleration: '2.4s' }
    }
  ];

  const selectedModelData = models.find(model => model.id === selectedModel);
  const selectedColorData = colors.find(color => color.id === selectedColor);

  const generateBugattiSVG = () => {
    const colors = selectedColorData?.carColors;
    return (
      <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-2xl">
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors?.primary} />
            <stop offset="30%" stopColor={colors?.metallic} />
            <stop offset="70%" stopColor={colors?.secondary} />
            <stop offset="100%" stopColor={colors?.primary} />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors?.accent} />
            <stop offset="50%" stopColor={colors?.metallic} />
            <stop offset="100%" stopColor={colors?.accent} />
          </linearGradient>
          <radialGradient id="wheelGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#4a5568" />
            <stop offset="70%" stopColor="#2d3748" />
            <stop offset="100%" stopColor="#1a202c" />
          </radialGradient>
          <filter id="carShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="6" dy="15" stdDeviation="12" floodOpacity="0.6" floodColor="#000000"/>
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Car Shadow */}
        <ellipse cx="400" cy="360" rx="280" ry="25" fill="rgba(0,0,0,0.5)" />
        
        {/* Main Bugatti Chiron Body - Ultra Detailed */}
        <path
          d="M100 240 L130 180 L170 150 L220 135 L280 130 L520 130 L580 135 L630 150 L670 180 L700 240 L700 280 L670 295 L630 300 L170 300 L130 295 L100 280 Z"
          fill="url(#bodyGradient)"
          filter="url(#carShadow)"
          stroke={colors?.accent}
          strokeWidth="3"
        />
        
        {/* Bugatti Signature C-Line - More Prominent */}
        <path
          d="M220 135 L250 120 L300 115 L500 115 L550 120 L580 135 L570 155 L550 175 L250 175 L230 155 Z"
          fill="url(#bodyGradient)"
          opacity="0.95"
          stroke={colors?.metallic}
          strokeWidth="2"
        />
        
        {/* Distinctive Bugatti Windshield - Larger */}
        <path
          d="M250 175 L280 125 L520 125 L550 175 L520 165 L280 165 Z"
          fill="rgba(200,220,255,0.4)"
          stroke={colors?.accent}
          strokeWidth="2"
        />
        
        {/* Side Air Intakes - Bugatti Signature - Bigger */}
        <ellipse cx="200" cy="210" rx="35" ry="20" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="3"/>
        <ellipse cx="200" cy="210" rx="25" ry="13" fill={colors?.primary}/>
        <ellipse cx="600" cy="210" rx="35" ry="20" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="3"/>
        <ellipse cx="600" cy="210" rx="25" ry="13" fill={colors?.primary}/>
        
        {/* Bugatti Horseshoe Grille - More Detailed */}
        <path
          d="M670 180 Q700 195 700 220 Q700 245 670 260 L640 250 Q660 225 660 200 Z"
          fill={colors?.secondary}
          stroke={colors?.accent}
          strokeWidth="3"
        />
        <path
          d="M650 195 Q670 210 670 230 Q670 250 650 260"
          fill="none"
          stroke={colors?.metallic}
          strokeWidth="4"
        />
        
        {/* Front Wheels - Bugatti Style - Larger */}
        <circle cx="200" cy="280" r="40" fill="url(#wheelGradient)" stroke={colors?.accent} strokeWidth="4"/>
        <circle cx="200" cy="280" r="30" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="3"/>
        <circle cx="200" cy="280" r="18" fill={colors?.accent}/>
        {/* Wheel Spokes */}
        <g stroke={colors?.metallic} strokeWidth="3">
          <line x1="182" y1="280" x2="218" y2="280"/>
          <line x1="200" y1="262" x2="200" y2="298"/>
          <line x1="187" y1="267" x2="213" y2="293"/>
          <line x1="213" y1="267" x2="187" y2="293"/>
        </g>
        
        {/* Rear Wheels - Larger */}
        <circle cx="600" cy="280" r="40" fill="url(#wheelGradient)" stroke={colors?.accent} strokeWidth="4"/>
        <circle cx="600" cy="280" r="30" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="3"/>
        <circle cx="600" cy="280" r="18" fill={colors?.accent}/>
        {/* Wheel Spokes */}
        <g stroke={colors?.metallic} strokeWidth="3">
          <line x1="582" y1="280" x2="618" y2="280"/>
          <line x1="600" y1="262" x2="600" y2="298"/>
          <line x1="587" y1="267" x2="613" y2="293"/>
          <line x1="613" y1="267" x2="587" y2="293"/>
        </g>
        
        {/* Distinctive Bugatti Headlights - Larger */}
        <ellipse cx="680" cy="200" rx="20" ry="25" fill="#ffffff" opacity="0.95" filter="url(#glow)"/>
        <ellipse cx="680" cy="200" rx="15" ry="20" fill={colors?.accent} opacity="0.8"/>
        <ellipse cx="680" cy="195" rx="8" ry="12" fill="#ffffff"/>
        
        {/* LED DRL - More Prominent */}
        <rect x="670" y="180" width="20" height="3" fill="#ffffff" opacity="0.9"/>
        <rect x="670" y="220" width="20" height="3" fill="#ffffff" opacity="0.9"/>
        
        {/* Taillights */}
        <ellipse cx="120" cy="200" rx="15" ry="20" fill="#ff3333" opacity="0.9"/>
        <ellipse cx="120" cy="230" rx="15" ry="20" fill="#ff3333" opacity="0.9"/>
        
        {/* Bugatti Side Character Lines - More Prominent */}
        <path
          d="M170 210 L630 210"
          stroke="url(#accentGradient)"
          strokeWidth="6"
          opacity="0.8"
        />
        <path
          d="M180 240 L620 240"
          stroke="url(#accentGradient)"
          strokeWidth="4"
          opacity="0.6"
        />
        
        {/* Door Lines */}
        <line x1="300" y1="135" x2="300" y2="260" stroke={colors?.secondary} strokeWidth="2" opacity="0.5"/>
        <line x1="500" y1="135" x2="500" y2="260" stroke={colors?.secondary} strokeWidth="2" opacity="0.5"/>
        
        {/* Rear Spoiler */}
        <rect x="80" y="190" width="30" height="12" fill={colors?.primary} stroke={colors?.accent} strokeWidth="2"/>
        <rect x="85" y="195" width="20" height="6" fill={colors?.accent} opacity="0.7"/>
        
        {/* Bugatti EB Logo - Larger */}
        <circle cx="400" cy="155" r="18" fill={colors?.accent} stroke="#ffffff" strokeWidth="3"/>
        <text x="400" y="162" textAnchor="middle" fontSize="14" fill="#ffffff" fontWeight="bold">EB</text>
        
        {/* Side Mirrors */}
        <ellipse cx="250" cy="165" rx="12" ry="8" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="2"/>
        <ellipse cx="550" cy="165" rx="12" ry="8" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="2"/>
        
        {/* Exhaust Pipes - Quad Setup */}
        <circle cx="110" cy="250" r="8" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="3"/>
        <circle cx="110" cy="270" r="8" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="3"/>
        <circle cx="125" cy="250" r="8" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="3"/>
        <circle cx="125" cy="270" r="8" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="3"/>
        
        {/* Additional Bugatti Details */}
        {/* Front Splitter */}
        <rect x="650" y="260" width="50" height="4" fill={colors?.accent} opacity="0.8"/>
        
        {/* Side Vents */}
        <rect x="350" y="200" width="20" height="3" fill={colors?.metallic} opacity="0.7"/>
        <rect x="350" y="210" width="20" height="3" fill={colors?.metallic} opacity="0.7"/>
        <rect x="430" y="200" width="20" height="3" fill={colors?.metallic} opacity="0.7"/>
        <rect x="430" y="210" width="20" height="3" fill={colors?.metallic} opacity="0.7"/>
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
          {/* Enhanced Bugatti Display with Real-time Color Change */}
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

              {/* Bugatti Car Visualization - Ultra Large and Detailed */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedModel}-${selectedColor}`}
                  className="relative h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  {/* Ultra Large Detailed Bugatti SVG */}
                  <motion.div
                    className="w-full h-full max-w-4xl max-h-96 p-6"
                    animate={{
                      scale: [1, 1.02, 1],
                      rotateY: [0, 2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {generateBugattiSVG()}
                  </motion.div>
                  
                  {/* Enhanced Sparkle Effect */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-white rounded-full"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`
                      }}
                      animate={{
                        scale: [0, 2, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  {/* Color Reflection Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-${selectedColor === 'white' ? 'gray' : selectedColor}-500/20 rounded-xl`}
                    animate={{
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
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
                        Bugatti {selectedModelData?.name}
                      </h4>
                      <p className="text-gray-300 font-medium">{selectedColorData?.name}</p>
                    </div>
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${selectedColorData?.gradient} border-2 border-white/30 shadow-lg`}
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
                        <span className="text-white font-medium block">Bugatti {model.name}</span>
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
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${color.gradient} border-2 border-gray-400/30 shadow-lg`}
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