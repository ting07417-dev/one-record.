import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Gallery from './pages/gallery';
import SparkleBackground from './components/SparkleBackground';
import FloatingButton from './components/FloatingButton';
import ScrollIndicator from './components/ScrollIndicator';
import AIQuote from './components/AIQuote';

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState('');

  // AI语录库
  const aiQuotes = [
    "在温柔中寻找力量，在脆弱中发现珍贵",
    "每一个敏感的灵魂，都是世界最珍贵的礼物",
    "你的柔软不是弱点，而是最深的智慧",
    "像花朵一样绽放，像星光一样闪烁",
    "内心的温柔，是这个世界最强大的力量"
  ];

  // 处理滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowAbout(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理漂浮按钮点击
  const handleFloatingButtonClick = () => {
    // 跳转到子页路由
    window.location.hash = '#/about';
  };

  // 处理触摸星光点击
  const handleTouchStars = () => {
    const randomQuote = aiQuotes[Math.floor(Math.random() * aiQuotes.length)];
    setCurrentQuote(randomQuote);
    setShowQuote(true);
    
    // 2秒后跳转到关于我子页
    setTimeout(() => {
      setShowQuote(false);
      window.location.hash = '#/about';
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景粒子效果 */}
      <SparkleBackground />
      
      {/* 主页面内容 */}
      <motion.div 
        className={`min-h-screen transition-all duration-1000 ${
          showAbout ? 'about-gradient' : 'dream-gradient'
        }`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {/* 头部格言区域 */}
        <Header onOpenAbout={() => { window.location.hash = '#/about'; }} />
        
        {/* 滚动指示器 */}
        <ScrollIndicator />
        
        {/* 漂浮光点按钮 */}
        <FloatingButton onClick={handleFloatingButtonClick} />
        
        {/* 底部触摸星光提示 */}
        <motion.div 
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleTouchStars}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-pink-300 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-green-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <span className="text-sm lxgw-wenkai text-gray-600 hover:text-gray-800 transition-colors">
              触摸星光，进入我的世界
            </span>
          </div>
        </motion.div>
      </motion.div>
      
      {/* 关于我模块 */}
      <AnimatePresence>
        {showAbout && <About />}
      </AnimatePresence>
      
      {/* AI语录显示 */}
      <AnimatePresence>
        {showQuote && <AIQuote quote={currentQuote} />}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      {/* 简易的顶部导航，可隐形或后续美化 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
