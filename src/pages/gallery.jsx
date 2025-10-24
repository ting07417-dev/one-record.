import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ImageCard from '../components/ImageCard';
import Header from '../components/Header';
import { galleryImages } from '../data/galleryImages';

const Gallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 页面加载动画
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景渐变 */}
      <div className="fixed inset-0 gallery-gradient" />
      
      {/* 浮动背景粒子 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 导航栏 */}
      <Header showNavigation={true} />

      {/* 主内容 */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Header */}
        <motion.header 
          className="text-center py-16 px-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-light lxgw-wenkai text-gray-800 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Gallery / 视觉空间
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600/80 lxgw-wenkai"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            梦境与灵感的交汇之地
          </motion.p>
          
          {/* 柔光下划线动画 */}
          <motion.div
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.header>

        {/* Gallery 容器 */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 pb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* 瀑布流布局 */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div key={image.id} className="break-inside-avoid">
                <ImageCard image={image} index={index} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* 底部诗意文字 */}
        <motion.div 
          className="text-center py-12 px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-600/70 lxgw-wenkai text-sm italic">
            「像是走进一个梦境博物馆，柔光下的记忆在呼吸。」
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gallery;
