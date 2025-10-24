import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SparkleBackground = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // 创建初始星光粒子
    const initialSparkles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparkles(initialSparkles);

    // 动态添加更多粒子
    const interval = setInterval(() => {
      setSparkles(prev => [
        ...prev,
        {
          id: Date.now(),
          top: Math.random() * 100,
          left: Math.random() * 100,
          delay: Math.random() * 3,
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* 星光粒子 */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* 花瓣飘落效果 */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="petal"
          style={{
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: ['-100vh', '100vh'],
            rotate: [0, 360],
            opacity: [1, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default SparkleBackground;

