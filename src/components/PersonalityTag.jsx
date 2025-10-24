import React from 'react';
import { motion } from 'framer-motion';

const PersonalityTag = ({ letter, label, delay = 0 }) => {
  return (
    <motion.div
      className="flex flex-col items-center space-y-3"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-2xl md:text-3xl font-light text-gray-700"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.75), rgba(255,192,203,0.35) 60%, rgba(255,255,255,0.1))',
          boxShadow: '0 10px 25px rgba(255, 182, 193, 0.35), inset 0 2px 8px rgba(255,255,255,0.6)'
        }}
        animate={{
          y: [0, -6, 0],
          boxShadow: [
            '0 10px 25px rgba(255, 182, 193, 0.35), inset 0 2px 8px rgba(255,255,255,0.6)',
            '0 14px 30px rgba(255, 182, 193, 0.5), inset 0 3px 10px rgba(255,255,255,0.7)',
            '0 10px 25px rgba(255, 182, 193, 0.35), inset 0 2px 8px rgba(255,255,255,0.6)'
          ]
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ rotate: 2 }}
      >
        {letter}
      </motion.div>
      <div className="lxgw-wenkai text-gray-600 text-sm opacity-90">{label}</div>
    </motion.div>
  );
};

export default PersonalityTag;



