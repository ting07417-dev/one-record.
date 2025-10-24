import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ onOpenAbout, showNavigation = false }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 relative z-10">
      {/* 导航栏 */}
      {showNavigation && (
        <motion.nav 
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <button
              onClick={() => window.location.hash = '#/'}
              className="lxgw-wenkai text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              首页
            </button>
            <button
              onClick={() => window.location.hash = '#/about'}
              className="lxgw-wenkai text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              关于我
            </button>
            <button
              onClick={() => window.location.hash = '#/gallery'}
              className="lxgw-wenkai text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              视觉空间
            </button>
          </div>
        </motion.nav>
      )}
      {/* 主格言区域 */}
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* 中文格言 */}
        <motion.h1 
          className="lxgw-wenkai text-4xl md:text-6xl lg:text-7xl font-light text-gray-700 mb-6 leading-tight"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          我不是脆弱，而是珍贵
        </motion.h1>
        
        {/* 英文格言 */}
        <motion.p 
          className="playfair-display text-lg md:text-xl lg:text-2xl text-gray-600 italic font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          I'm Not Fragile but Precious
        </motion.p>

        {/* 进入关于我按钮 */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button
            type="button"
            onClick={onOpenAbout}
            className="lxgw-wenkai px-5 py-2 rounded-full text-gray-700 bg-white/50 hover:bg-white/70 backdrop-blur border border-white/60 shadow-sm transition-colors"
          >
            进入关于我
          </button>
        </motion.div>
      </motion.div>
      
      {/* 底部签名 */}
      <motion.div 
        className="mt-16 flex items-center space-x-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-2 h-2 bg-gradient-to-r from-pink-300 to-green-300 rounded-full animate-pulse"></div>
        <span className="text-sm lxgw-wenkai">designed with KENZIE</span>
        <div className="w-2 h-2 bg-gradient-to-r from-green-300 to-pink-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </motion.div>
    </div>
  );
};

export default Header;
