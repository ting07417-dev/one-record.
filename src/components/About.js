import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

const About = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* 导航栏 */}
      <Header showNavigation={true} />
      <div className="max-w-4xl mx-auto text-center">
        {/* 关于我标题 */}
        <motion.h2 
          className="lxgw-wenkai text-3xl md:text-4xl lg:text-5xl font-light text-gray-700 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          关于我
        </motion.h2>
        
        {/* 个人描述 */}
        <motion.div 
          className="space-y-6 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className="lxgw-wenkai text-lg md:text-xl leading-relaxed">
            我是一个INFP性格的创作者，相信每一个敏感的灵魂都拥有独特的美。
          </p>
          
          <p className="lxgw-wenkai text-lg md:text-xl leading-relaxed">
            在这个快节奏的世界里，我选择用温柔的方式与世界对话，
            用文字编织梦想，用色彩描绘内心。
          </p>
          
          <p className="lxgw-wenkai text-lg md:text-xl leading-relaxed">
            我的脆弱不是弱点，而是最珍贵的礼物。
            它让我能够感受到生活的细微美好，
            创造出充满温度的作品。
          </p>
        </motion.div>
        
        {/* 特色标签 */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {['温柔创作', '诗意生活', '敏感美学', '梦幻设计'].map((tag, index) => (
            <motion.span
              key={tag}
              className="px-4 py-2 bg-gradient-to-r from-pink-200 to-green-200 rounded-full text-gray-700 lxgw-wenkai text-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        {/* 联系信息 */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p className="lxgw-wenkai text-gray-500 text-sm">
            让我们一起在温柔中寻找力量
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

