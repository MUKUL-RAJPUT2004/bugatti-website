import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTrophy, FaUsers, FaGlobe, FaFlag } from 'react-icons/fa';

const CompanyHistory = () => {
  const milestones = [
    {
      year: '1909',
      title: 'Foundation',
      description: 'Ettore Bugatti founded the company in Molsheim, Alsace, with a vision to create "art in motion"',
      icon: FaCalendarAlt,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-amber-500 to-orange-600'
    },
    {
      year: '1920s-30s',
      title: 'Golden Era',
      description: 'Dominated racing with Type 35 and created luxury masterpieces that defined automotive excellence',
      icon: FaTrophy,
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      year: '1998',
      title: 'Volkswagen Era',
      description: 'Acquired by Volkswagen Group, beginning modern renaissance with cutting-edge technology',
      icon: FaUsers,
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      year: '2005-Present',
      title: 'Hypercar Pioneer',
      description: 'Veyron and Chiron redefine automotive performance limits, setting new world records',
      icon: FaGlobe,
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="history" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(156,163,175,0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(107,114,128,0.15)_0%,transparent_50%)]"></div>
      </div>

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
            Heritage Timeline
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-8"
          />
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Journey through over a century of automotive excellence and innovation.
          </motion.p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">The Bugatti Legacy</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded by Italian-born French automobile designer Ettore Bugatti in 1909, Bugatti quickly established itself as a manufacturer of high-performance automobiles known for their design beauty and numerous race victories.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Ettore Bugatti's philosophy was simple: "Nothing is too beautiful, nothing is too expensive." This ethos continues to drive every Bugatti creation today, where each vehicle represents the perfect fusion of art and engineering.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From the legendary Type 35 that dominated Grand Prix racing in the 1920s to today's Chiron hypercar, Bugatti has consistently pushed the boundaries of what's possible in automotive design and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Bugatti Heritage"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 rounded-full hidden lg:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-16`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center border-4 border-gray-800 shadow-2xl`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={24} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-400/20 shadow-2xl">
                      <div className={`flex items-center mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.color} mr-4 lg:hidden`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <motion.span 
                          className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white"
                          animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          {milestone.year}
                        </motion.span>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-4">{milestone.title}</h4>
                      <p className="text-gray-300 leading-relaxed mb-6">{milestone.description}</p>
                      
                      {/* Achievement Badge */}
                      <motion.div
                        className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white text-sm font-bold`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaFlag size={12} className="mr-2" />
                        Milestone Achieved
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Image Card */}
                  <motion.div
                    className={`w-full lg:w-5/12 mt-8 lg:mt-0`}
                    whileHover={{ scale: 1.05, rotateY: isEven ? -5 : 5 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} opacity-20`}></div>
                      
                      {/* Floating Year Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm backdrop-blur-sm`}>
                          {milestone.year}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: '115+', label: 'Years of Excellence' },
            { number: '2000+', label: 'Race Victories' },
            { number: '500+', label: 'Cars Produced' },
            { number: '1', label: 'Legendary Brand' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-400/10"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h4 
                className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHistory;