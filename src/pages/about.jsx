import React from 'react';
import { motion } from 'framer-motion';
import FloatingBackground from '../components/FloatingBackground';
import PersonalityTag from '../components/PersonalityTag';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden dream-gradient">
      {/* 背景漂浮层：星点与花瓣 */}
      <FloatingBackground intensity={10} />

      {/* 内容容器 */}
      <motion.main
        className="relative z-10 max-w-3xl mx-auto px-6 py-24 md:py-28 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* 上半部分：自述 + 头像 */}
        <section className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center space-y-8"
          >
            {/* 头像/剪影：AI风柔光圆形 */}
            <motion.div
              className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl"
              style={{
                background:
                  'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.85), rgba(255,192,203,0.35) 60%, rgba(255,255,255,0.15))',
                filter: 'blur(0.2px)'
              }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 自述文本 */}
            <motion.div
              className="lxgw-wenkai max-w-lg mx-auto text-center leading-relaxed opacity-90 text-gray-700 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <p>我是一个i人，对AI略有兴趣。</p>
              <p>最近有些迷茫，所以就想通过这种方式转移一下注意力。</p>
              <p>有时候别人不经意间说的话，我会在意很久。</p>
              <p>我讨厌那种空洞的喧嚣，也讨厌被迫倾听。</p>
              <p>明明什么都不会，还要装作自己很懂。</p>
              <p>我只是想安静地存在，不吵不闹。</p>
              <p>所以，有时我选择沉默。</p>
            </motion.div>
          </motion.div>
        </section>

        {/* 下半部分：INFP 标签 */}
        <section>
          <motion.div
            className="flex items-end justify-center gap-6 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <PersonalityTag letter="I" label="独处" delay={0.1} />
            <PersonalityTag letter="N" label="直觉" delay={0.2} />
            <PersonalityTag letter="F" label="情感" delay={0.3} />
            <PersonalityTag letter="P" label="开放" delay={0.4} />
          </motion.div>

          {/* 结尾签名式短文 */}
          <motion.p
            className="lxgw-wenkai mt-12 md:mt-14 text-gray-600 opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            「我喜欢独处，这是我与世界对话的一种方式。」
          </motion.p>
        </section>
      </motion.main>
    </div>
  );
};

export default AboutPage;



