import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck, FaCar, FaStar, FaMagic } from 'react-icons/fa';

const ColorCustomizer = () => {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedModel, setSelectedModel] = useState('chiron');

  const colors = [
    { id: 'blue', name: 'Atlantic Blue', value: '#1e40af', gradient: 'from-blue-600 to-blue-800', filter: 'hue-rotate(0deg)' },
    { id: 'red', name: 'Rouge Sang', value: '#dc2626', gradient: 'from-red-600 to-red-800', filter: 'hue-rotate(320deg) saturate(1.2)' },
    { id: 'black', name: 'Noir Carbon', value: '#111827', gradient: 'from-gray-900 to-black', filter: 'brightness(0.3) contrast(1.2)' },
    { id: 'white', name: 'Blanc Pur', value: '#f8fafc', gradient: 'from-gray-100 to-white', filter: 'brightness(1.8) contrast(0.8)' },
    { id: 'silver', name: 'Argent Métallique', value: '#6b7280', gradient: 'from-gray-500 to-gray-700', filter: 'hue-rotate(200deg) saturate(0.5)' },
    { id: 'gold', name: 'Or Élégant', value: '#d97706', gradient: 'from-yellow-600 to-amber-700', filter: 'hue-rotate(45deg) saturate(1.5)' }
  ];

  const models = [
    { id: 'chiron', name: 'Chiron', image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
    { id: 'chiron-sport', name: 'Chiron Sport', image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' },
    { id: 'divo', name: 'Divo', image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop' }
  ];

  const selectedModelData = models.find(model => model.id === selectedModel);
  const selectedColorData = colors.find(color => color.id === selectedColor);

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
            Experience the art of personalization. Choose your perfect Bugatti configuration and watch it transform.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Car Display */}
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

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedModel}-${selectedColor}`}
                  className="relative h-96 rounded-xl overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  <img 
                    src={selectedModelData?.image}
                    alt={selectedModelData?.name}
                    className="w-full h-full object-cover transition-all duration-1000"
                    style={{ filter: selectedColorData?.filter }}
                  />
                  
                  {/* Color Overlay Effect */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${selectedColorData?.gradient} mix-blend-overlay`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 0.8 }}
                  />
                  
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
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              </AnimatePresence>
              
              {/* Enhanced Info Card */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div 
                  className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-400/30"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center justify-between">
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
                      <span className="text-white font-medium">{model.name}</span>
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
                      <div className="text-left">
                        <p className="text-white font-medium">{color.name}</p>
                      </div>
                      <AnimatePresence>
                        {selectedColor === color.id && (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            className="ml-auto w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center"
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

            {/* Enhanced Action Button */}
            <motion.button
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 40px rgba(156, 163, 175, 0.6)",
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-500 border border-gray-400/20 relative overflow-hidden"
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
              <span className="relative text-lg flex items-center justify-center space-x-2">
                <FaMagic />
                <span>Configure Your Bugatti</span>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ColorCustomizer;