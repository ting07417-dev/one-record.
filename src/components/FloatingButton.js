import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloatingButton = ({ onClick }) => {
  const [showGlow, setShowGlow] = useState(false);

  return (
    <motion.div
      className="fixed top-1/2 right-8 transform -translate-y-1/2 z-20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.button
        className="relative w-12 h-12 rounded-full bg-gradient-to-r from-pink-300 to-green-300 flex items-center justify-center text-white text-xl font-light shadow-lg"
        onClick={onClick}
        onHoverStart={() => setShowGlow(true)}
        onHoverEnd={() => setShowGlow(false)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* 光点符号 */}
        <span className="text-2xl">✦</span>
        
        {/* 光晕效果 */}
        {showGlow && (
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
        
        {/* 持续的光晕 */}
        <motion.div
          className="absolute inset-0 rounded-full border border-white opacity-20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default FloatingButton;

