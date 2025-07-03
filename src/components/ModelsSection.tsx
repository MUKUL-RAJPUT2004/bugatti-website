import React from 'react';
import { motion } from 'framer-motion';
import ModelCard from './ModelCard';
import { carModels } from '../data/carModels';

const ModelsSection = () => {
  return (
    <section id="models" className="relative min-h-screen py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(156,163,175,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(107,114,128,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="relative z-10 max-w-8xl mx-auto">
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
            Masterpiece Collection
          </motion.h2>
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto rounded-full mb-8"
          />
          <motion.p 
            className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Each Bugatti represents the ultimate expression of automotive artistry, where performance meets perfection.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {carModels.map((model, index) => (
            <ModelCard key={model.id} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;