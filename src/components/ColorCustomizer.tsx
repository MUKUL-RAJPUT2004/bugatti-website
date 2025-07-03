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
      <svg viewBox="0 0 600 300" className="w-full h-full drop-shadow-2xl">
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
            <feDropShadow dx="4" dy="10" stdDeviation="8" floodOpacity="0.5" floodColor="#000000"/>
          </filter>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Car Shadow */}
        <ellipse cx="300" cy="270" rx="220" ry="20" fill="rgba(0,0,0,0.4)" />
        
        {/* Main Bugatti Chiron Body - Distinctive Shape */}
        <path
          d="M80 180 L100 140 L130 120 L160 110 L200 105 L400 105 L440 110 L470 120 L500 140 L520 180 L520 210 L500 220 L470 225 L130 225 L100 220 L80 210 Z"
          fill="url(#bodyGradient)"
          filter="url(#carShadow)"
          stroke={colors?.accent}
          strokeWidth="2"
        />
        
        {/* Bugatti Signature C-Line */}
        <path
          d="M160 110 L180 100 L220 95 L380 95 L420 100 L440 110 L430 125 L420 140 L180 140 L170 125 Z"
          fill="url(#bodyGradient)"
          opacity="0.95"
          stroke={colors?.metallic}
          strokeWidth="1"
        />
        
        {/* Distinctive Bugatti Windshield */}
        <path
          d="M180 140 L200 98 L400 98 L420 140 L400 135 L200 135 Z"
          fill="rgba(200,220,255,0.3)"
          stroke={colors?.accent}
          strokeWidth="1.5"
        />
        
        {/* Side Air Intakes - Bugatti Signature */}
        <ellipse cx="150" cy="160" rx="25" ry="15" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="2"/>
        <ellipse cx="150" cy="160" rx="18" ry="10" fill={colors?.primary}/>
        <ellipse cx="450" cy="160" rx="25" ry="15" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="2"/>
        <ellipse cx="450" cy="160" rx="18" ry="10" fill={colors?.primary}/>
        
        {/* Bugatti Horseshoe Grille */}
        <path
          d="M500 140 Q520 150 520 170 Q520 190 500 200 L480 195 Q490 175 490 155 Z"
          fill={colors?.secondary}
          stroke={colors?.accent}
          strokeWidth="2"
        />
        <path
          d="M485 150 Q500 160 500 175 Q500 190 485 195"
          fill="none"
          stroke={colors?.metallic}
          strokeWidth="3"
        />
        
        {/* Front Wheels - Bugatti Style */}
        <circle cx="150" cy="210" r="30" fill="url(#wheelGradient)" stroke={colors?.accent} strokeWidth="3"/>
        <circle cx="150" cy="210" r="22" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="2"/>
        <circle cx="150" cy="210" r="12" fill={colors?.accent}/>
        {/* Wheel Spokes */}
        <g stroke={colors?.metallic} strokeWidth="2">
          <line x1="138" y1="210" x2="162" y2="210"/>
          <line x1="150" y1="198" x2="150" y2="222"/>
          <line x1="141" y1="199" x2="159" y2="221"/>
          <line x1="159" y1="199" x2="141" y2="221"/>
        </g>
        
        {/* Rear Wheels */}
        <circle cx="450" cy="210" r="30" fill="url(#wheelGradient)" stroke={colors?.accent} strokeWidth="3"/>
        <circle cx="450" cy="210" r="22" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="2"/>
        <circle cx="450" cy="210" r="12" fill={colors?.accent}/>
        {/* Wheel Spokes */}
        <g stroke={colors?.metallic} strokeWidth="2">
          <line x1="438" y1="210" x2="462" y2="210"/>
          <line x1="450" y1="198" x2="450" y2="222"/>
          <line x1="441" y1="199" x2="459" y2="221"/>
          <line x1="459" y1="199" x2="441" y2="221"/>
        </g>
        
        {/* Distinctive Bugatti Headlights */}
        <ellipse cx="510" cy="155" rx="15" ry="20" fill="#ffffff" opacity="0.95" filter="url(#glow)"/>
        <ellipse cx="510" cy="155" rx="10" ry="15" fill={colors?.accent} opacity="0.8"/>
        <ellipse cx="510" cy="150" rx="5" ry="8" fill="#ffffff"/>
        
        {/* LED DRL */}
        <rect x="505" y="140" width="10" height="2" fill="#ffffff" opacity="0.9"/>
        <rect x="505" y="175" width="10" height="2" fill="#ffffff" opacity="0.9"/>
        
        {/* Taillights */}
        <ellipse cx="90" cy="155" rx="10" ry="15" fill="#ff3333" opacity="0.9"/>
        <ellipse cx="90" cy="175" rx="10" ry="15" fill="#ff3333" opacity="0.9"/>
        
        {/* Bugatti Side Character Lines */}
        <path
          d="M130 160 L470 160"
          stroke="url(#accentGradient)"
          strokeWidth="4"
          opacity="0.8"
        />
        <path
          d="M140 180 L460 180"
          stroke="url(#accentGradient)"
          strokeWidth="3"
          opacity="0.6"
        />
        
        {/* Door Lines */}
        <line x1="220" y1="110" x2="220" y2="200" stroke={colors?.secondary} strokeWidth="1.5" opacity="0.5"/>
        <line x1="380" y1="110" x2="380" y2="200" stroke={colors?.secondary} strokeWidth="1.5" opacity="0.5"/>
        
        {/* Rear Spoiler */}
        <rect x="70" y="145" width="20" height="8" fill={colors?.primary} stroke={colors?.accent} strokeWidth="1"/>
        <rect x="72" y="147" width="16" height="4" fill={colors?.accent} opacity="0.7"/>
        
        {/* Bugatti EB Logo */}
        <circle cx="300" cy="120" r="12" fill={colors?.accent} stroke="#ffffff" strokeWidth="2"/>
        <text x="300" y="125" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">EB</text>
        
        {/* Side Mirrors */}
        <ellipse cx="180" cy="130" rx="8" ry="5" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="1"/>
        <ellipse cx="420" cy="130" rx="8" ry="5" fill={colors?.secondary} stroke={colors?.accent} strokeWidth="1"/>
        
        {/* Exhaust Pipes */}
        <circle cx="85" cy="195" r="6" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="2"/>
        <circle cx="85" cy="210" r="6" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="2"/>
        <circle cx="95" cy="195" r="6" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="2"/>
        <circle cx="95" cy="210" r="6" fill={colors?.secondary} stroke={colors?.metallic} strokeWidth="2"/>
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

              {/* Bugatti Car Visualization - Large and Detailed */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedModel}-${selectedColor}`}
                  className="relative h-96 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/30 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  {/* Large Detailed Bugatti SVG */}
                  <motion.div
                    className="w-full h-full max-w-2xl max-h-80 p-4"
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
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-white rounded-full"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
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