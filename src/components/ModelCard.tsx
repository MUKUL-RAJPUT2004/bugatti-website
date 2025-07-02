import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBolt, FaTachometerAlt, FaDollarSign, FaStopwatch } from 'react-icons/fa';

interface Model {
  id: string;
  name: string;
  topSpeed: string;
  horsepower: string;
  price: string;
  acceleration: string;
  description: string;
  image: string;
}

interface ModelCardProps {
  model: Model;
  index: number;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  const specs = [
    { label: 'Top Speed', value: model.topSpeed, color: 'text-gray-300', icon: FaTachometerAlt, gradient: 'from-gray-600 to-gray-500' },
    { label: 'Power', value: model.horsepower, color: 'text-gray-200', icon: FaBolt, gradient: 'from-gray-500 to-gray-400' },
    { label: 'Price', value: model.price, color: 'text-gray-300', icon: FaDollarSign, gradient: 'from-gray-600 to-gray-500' },
    { label: '0-60mph', value: model.acceleration, color: 'text-gray-200', icon: FaStopwatch, gradient: 'from-gray-500 to-gray-400' }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : { opacity: 0, y: 100, rotateX: 45, scale: 0.9 }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.2, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.03, 
        rotateY: 3,
        rotateX: -2,
        z: 50
      }}
      className="group relative transform-gpu perspective-1000"
    >
      <div className="relative bg-gradient-to-br from-gray-900/60 to-black/80 backdrop-blur-3xl rounded-2xl p-8 border border-gray-400/10 hover:border-gray-400/30 transition-all duration-700 overflow-hidden h-full">
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-700/10 via-gray-600/10 to-gray-800/10 rounded-2xl"
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.02 : 1
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Car Image */}
        <div className="relative mb-8 h-64 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-xl overflow-hidden border border-gray-400/10 backdrop-blur-sm">
          <motion.img
            src={model.image}
            alt={model.name}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Metallic overlay effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-gray-300/60 to-transparent"
                style={{
                  width: '120px',
                  top: `${15 + i * 25}%`,
                  left: '-30px'
                }}
                animate={isHovered ? {
                  x: [0, 40],
                  opacity: [0, 1, 0]
                } : {}}
                transition={{
                  duration: 0.6,
                  repeat: isHovered ? Infinity : 0,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </div>
        
        <div className="relative z-10">
          <motion.h3 
            className="text-3xl lg:text-4xl font-black mb-8 tracking-tight text-white"
          >
            {model.name}
          </motion.h3>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {specs.map((spec, i) => {
              const IconComponent = spec.icon;
              return (
                <motion.div
                  key={spec.label}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-gray-400/10 hover:border-gray-400/20 group/spec"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    boxShadow: '0 0 20px rgba(156,163,175,0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <motion.div
                      className={`p-2 rounded-lg bg-gradient-to-r ${spec.gradient} bg-opacity-20`}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 0 15px rgba(156,163,175,0.4)`
                      }}
                    >
                      <IconComponent size={18} className={spec.color} />
                    </motion.div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{spec.label}</p>
                      <p className={`${spec.color} font-bold text-lg`}>{spec.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.p 
            className="text-gray-300 text-base leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
          >
            {model.description}
          </motion.p>
          
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(156, 163, 175, 0.4)",
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold rounded-xl hover:from-gray-600 hover:to-gray-500 transition-all duration-500 border border-gray-400/20"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>Explore Details</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ModelCard;