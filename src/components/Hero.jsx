import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-rose-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 60, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">AI-Enhanced Research Solutions</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block">World-Class</span>
            <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Research Limited
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-4xl text-white/90 mb-6 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Start with quality and excellence will be your destination
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Converting data into competitive advantage through AI-enhanced research solutions across Africa
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { icon: <Globe className="w-4 h-4" />, text: "18+ Countries" },
              { icon: <TrendingUp className="w-4 h-4" />, text: "187+ Projects" },
              { icon: <Sparkles className="w-4 h-4" />, text: "AI-Powered" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white"
              >
                {item.icon}
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a 
              href="#contact"
              className="group relative overflow-hidden bg-white text-purple-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;