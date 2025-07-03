import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBolt, FaTachometerAlt, FaRocket, FaFire, FaCog, FaChartLine } from 'react-icons/fa';

const PerformanceStats = () => {
  const [activeChart, setActiveChart] = useState('speed');
  
  const performanceData = {
    speed: {
      title: 'Top Speed Evolution',
      data: [
        { model: 'Type 35', year: '1924', value: 125, color: 'from-amber-500 to-orange-600' },
        { model: 'Type 57', year: '1934', value: 135, color: 'from-yellow-500 to-amber-600' },
        { model: 'Veyron', year: '2005', value: 253, color: 'from-blue-500 to-indigo-600' },
        { model: 'Veyron SS', year: '2010', value: 268, color: 'from-purple-500 to-blue-600' },
        { model: 'Chiron', year: '2016', value: 261, color: 'from-red-500 to-purple-600' },
        { model: 'Chiron SS', year: '2019', value: 304, color: 'from-pink-500 to-red-600' }
      ],
      unit: 'mph'
    },
    power: {
      title: 'Horsepower Progression',
      data: [
        { model: 'Type 35', year: '1924', value: 90, color: 'from-amber-500 to-orange-600' },
        { model: 'Type 57', year: '1934', value: 135, color: 'from-yellow-500 to-amber-600' },
        { model: 'Veyron', year: '2005', value: 1001, color: 'from-blue-500 to-indigo-600' },
        { model: 'Veyron SS', year: '2010', value: 1200, color: 'from-purple-500 to-blue-600' },
        { model: 'Chiron', year: '2016', value: 1479, color: 'from-red-500 to-purple-600' },
        { model: 'Bolide', year: '2020', value: 1825, color: 'from-pink-500 to-red-600' }
      ],
      unit: 'HP'
    },
    acceleration: {
      title: '0-60 mph Times',
      data: [
        { model: 'Type 35', year: '1924', value: 8.5, color: 'from-amber-500 to-orange-600' },
        { model: 'Type 57', year: '1934', value: 7.2, color: 'from-yellow-500 to-amber-600' },
        { model: 'Veyron', year: '2005', value: 2.5, color: 'from-blue-500 to-indigo-600' },
        { model: 'Veyron SS', year: '2010', value: 2.4, color: 'from-purple-500 to-blue-600' },
        { model: 'Chiron', year: '2016', value: 2.4, color: 'from-red-500 to-purple-600' },
        { model: 'Bolide', year: '2020', value: 2.17, color: 'from-pink-500 to-red-600' }
      ],
      unit: 's'
    }
  };

  const currentData = performanceData[activeChart as keyof typeof performanceData];
  const maxValue = Math.max(...currentData.data.map(item => item.value));

  const achievements = [
    {
      title: 'World Speed Records',
      value: '15+',
      description: 'Official speed records broken',
      icon: FaTachometerAlt,
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Engineering Patents',
      value: '200+',
      description: 'Innovative technologies patented',
      icon: FaCog,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Racing Championships',
      value: '50+',
      description: 'Major racing titles won',
      icon: FaFire,
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Performance Milestones',
      value: '1000+',
      description: 'HP barrier first broken',
      icon: FaBolt,
      gradient: 'from-yellow-600 to-orange-600'
    }
  ];

  return (
    <section id="performance" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(156,163,175,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(107,114,128,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Animated Background Elements */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 8 + i,
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
            Performance Evolution
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-8"
          />
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Witness the remarkable evolution of Bugatti performance through data and innovation.
          </motion.p>
        </motion.div>

        {/* Performance Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Chart Controls */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaChartLine className="mr-3 text-blue-400" />
              Performance Metrics
            </h3>
            {Object.entries(performanceData).map(([key, data]) => (
              <motion.button
                key={key}
                onClick={() => setActiveChart(key)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 ${
                  activeChart === key
                    ? 'border-gray-400/40 bg-gray-800/50 shadow-lg'
                    : 'border-gray-400/20 bg-gray-900/30 hover:border-gray-400/30'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{data.title}</span>
                  {activeChart === key && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-blue-400 rounded-full"
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Interactive Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-400/10"
          >
            <h4 className="text-xl font-bold text-white mb-6">{currentData.title}</h4>
            <div className="space-y-4">
              {currentData.data.map((item, index) => (
                <motion.div
                  key={item.model}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium">{item.model}</span>
                      <span className="text-gray-400 text-sm">({item.year})</span>
                    </div>
                    <span className="text-white font-bold">
                      {item.value} {currentData.unit}
                    </span>
                  </div>
                  <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.value / maxValue) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                className="bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-400/10 text-center"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  borderColor: 'rgba(156,163,175,0.3)',
                  boxShadow: '0 0 30px rgba(156,163,175,0.2)'
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-r ${achievement.gradient}`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent size={32} className="text-white" />
                  </motion.div>
                </div>
                <motion.h4
                  className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {achievement.value}
                </motion.h4>
                <h5 className="text-white font-bold text-lg mb-2">{achievement.title}</h5>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceStats;