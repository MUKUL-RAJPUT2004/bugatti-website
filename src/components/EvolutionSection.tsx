import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaChartLine, FaTrophy, FaBolt, FaRocket, FaStar } from 'react-icons/fa';

const EvolutionSection = () => {
  const evolutionData = [
    {
      era: '1909-1940',
      title: 'The Pioneer Era',
      description: 'Ettore Bugatti established the brand with artistic automotive designs and racing dominance.',
      models: ['Type 13', 'Type 35', 'Type 57'],
      achievement: 'Over 2,000 race victories',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: FaCalendarAlt,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      era: '1998-2005',
      title: 'The Renaissance',
      description: 'Volkswagen Group acquired Bugatti and began developing the revolutionary Veyron.',
      models: ['Veyron Development'],
      achievement: 'Return to hypercar leadership',
      image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-159293.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: FaChartLine,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      era: '2005-2015',
      title: 'The Veyron Era',
      description: 'The Veyron redefined what was possible in automotive engineering and performance.',
      models: ['Veyron 16.4', 'Veyron Super Sport', 'Veyron Grand Sport'],
      achievement: '1,001 HP milestone achieved',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: FaTrophy,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      era: '2016-Present',
      title: 'The Chiron Dynasty',
      description: 'The Chiron and its variants continue to push the boundaries of hypercar performance.',
      models: ['Chiron', 'Chiron Sport', 'Chiron Super Sport', 'Bolide'],
      achievement: '1,479 HP and beyond',
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      icon: FaBolt,
      gradient: 'from-red-500 to-rose-600'
    }
  ];

  return (
    <section id="evolution" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(156,163,175,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(107,114,128,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Animated Background Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 border border-gray-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360]
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
            Evolution of Excellence
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-8"
          />
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Witness the remarkable journey of Bugatti through the decades, from racing legend to hypercar pioneer.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {evolutionData.map((era, index) => {
            const IconComponent = era.icon;
            return (
              <motion.div
                key={era.era}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div 
                      className={`p-4 rounded-xl bg-gradient-to-r ${era.gradient} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={32} className="text-white" />
                    </motion.div>
                    <div>
                      <motion.span 
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        {era.era}
                      </motion.span>
                      <h3 className="text-3xl font-bold text-white">{era.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    {era.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-white flex items-center">
                      <FaRocket className="mr-2 text-blue-400" />
                      Key Models
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {era.models.map((model, i) => (
                        <motion.span
                          key={model}
                          className={`px-4 py-2 bg-gradient-to-r ${era.gradient} rounded-full text-white text-sm font-medium shadow-lg`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {model}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="bg-gradient-to-r from-gray-900/60 to-black/80 backdrop-blur-xl rounded-xl p-6 border border-gray-400/10"
                    whileHover={{ scale: 1.02, borderColor: 'rgba(156,163,175,0.3)' }}
                  >
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                      <FaStar className="mr-2 text-yellow-400" />
                      Major Achievement
                    </h4>
                    <p className="text-gray-300">{era.achievement}</p>
                  </motion.div>
                </div>

                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={era.image}
                      alt={era.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${era.gradient} opacity-20`}></div>
                    
                    {/* Era Badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${era.gradient} text-white font-bold text-sm backdrop-blur-sm shadow-lg`}>
                        {era.era}
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-gray-400/20">
                        <h4 className="text-white font-bold text-lg flex items-center">
                          <FaTrophy className="mr-2 text-yellow-400" />
                          {era.title}
                        </h4>
                        <p className="text-gray-300">{era.achievement}</p>
                      </div>
                    </div>

                    {/* Animated Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${era.gradient} opacity-0`}
                      animate={{
                        opacity: [0, 0.2, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;