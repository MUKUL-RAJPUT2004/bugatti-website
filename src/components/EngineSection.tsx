import React from 'react';
import { motion } from 'framer-motion';
import { FaCog, FaBolt, FaTachometerAlt, FaWrench, FaFire, FaRocket } from 'react-icons/fa';

const EngineSection = () => {
  const engines = [
    {
      name: 'W16 Quad-Turbocharged',
      power: '1,479 HP',
      torque: '1,180 lb-ft',
      displacement: '8.0L',
      description: 'The legendary W16 engine that powers the Chiron series, featuring four turbochargers and unmatched refinement.',
      image: 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Quad-Turbo System', '16 Cylinders', 'Carbon Fiber Components', 'Advanced Cooling'],
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      name: 'W16 Veyron Engine',
      power: '1,001 HP',
      torque: '922 lb-ft',
      displacement: '8.0L',
      description: 'The groundbreaking engine that started the hypercar revolution, setting new standards for power and performance.',
      image: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Revolutionary Design', 'Precision Engineering', 'Titanium Components', 'Dry Sump Lubrication'],
      gradient: 'from-red-600 to-orange-600'
    }
  ];

  return (
    <section id="engines" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(156,163,175,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(107,114,128,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Engine Parts Animation */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 border border-gray-500/30 rounded-lg"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8 + i * 2,
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
            Engineering Marvel
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-8"
          />
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            At the heart of every Bugatti lies an engineering masterpiece that redefines the boundaries of automotive performance.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.name}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <motion.h3 
                    className="text-4xl font-bold text-white mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {engine.name}
                  </motion.h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {engine.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: 'Power', value: engine.power, icon: FaBolt, color: 'text-yellow-400' },
                    { label: 'Torque', value: engine.torque, icon: FaTachometerAlt, color: 'text-red-400' },
                    { label: 'Displacement', value: engine.displacement, icon: FaCog, color: 'text-blue-400' },
                    { label: 'Configuration', value: 'W16', icon: FaWrench, color: 'text-green-400' }
                  ].map((spec, i) => {
                    const IconComponent = spec.icon;
                    return (
                      <motion.div
                        key={spec.label}
                        className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-400/10"
                        whileHover={{ 
                          scale: 1.05,
                          borderColor: 'rgba(156,163,175,0.3)',
                          boxShadow: '0 0 20px rgba(156,163,175,0.2)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${engine.gradient} mr-3`}>
                            <IconComponent size={20} className="text-white" />
                          </div>
                          <span className="text-gray-400 text-sm font-medium">{spec.label}</span>
                        </div>
                        <p className={`${spec.color} font-bold text-xl`}>{spec.value}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-white flex items-center">
                    <FaFire className="mr-2 text-orange-400" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {engine.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3 text-gray-300 bg-gray-800/30 rounded-lg p-3 border border-gray-600/20"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(75, 85, 99, 0.4)' }}
                      >
                        <FaRocket className="text-blue-400" size={12} />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={engine.image}
                    alt={engine.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${engine.gradient} opacity-20`}></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-gray-400/20">
                      <h4 className="text-white font-bold text-lg mb-2 flex items-center">
                        <FaBolt className="mr-2 text-yellow-400" />
                        Performance Specs
                      </h4>
                      <div className="flex justify-between text-gray-300">
                        <span>{engine.power}</span>
                        <span>{engine.torque}</span>
                      </div>
                    </div>
                  </div>

                  {/* Animated Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${engine.gradient} opacity-0`}
                    animate={{
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineSection;