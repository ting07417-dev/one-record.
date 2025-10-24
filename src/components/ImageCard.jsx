import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ image, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* 图片容器 */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white/20 backdrop-blur-sm">
        <img
          src={image.imageUrl}
          alt={image.alt}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* 悬停时的文字覆盖层 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                     flex items-end justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.p
            className="text-white text-center text-sm lxgw-wenkai leading-relaxed
                       bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3
                       border border-white/20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: isHovered ? 0 : 20, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ 
              duration: 0.4, 
              delay: isHovered ? 0.1 : 0,
              ease: "easeOut"
            }}
          >
            {image.phrase}
          </motion.p>
        </motion.div>
      </div>
      
      {/* 柔光效果 */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0.1,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ImageCard;
