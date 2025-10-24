import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div 
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1 }}
    >
      {/* 下箭头动画 */}
      <motion.div
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-gray-500 text-2xl"
      >
        ↓
      </motion.div>
      
      {/* 滚动提示文字 */}
      <motion.span 
        className="text-sm lxgw-wenkai text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        Scroll to explore
      </motion.span>
    </motion.div>
  );
};

export default ScrollIndicator;

