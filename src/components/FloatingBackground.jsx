import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingBackground = ({ intensity = 8 }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const initial = Array.from({ length: intensity }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 2 + 1,
    }));
    setSparkles(initial);
  }, [intensity]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {sparkles.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: 'rgba(255,255,255,0.8)'
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.6, 1, 0.6],
            y: [0, -10, 0],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
        />
      ))}

      {Array.from({ length: 6 }).map((_, i) => (
        <motion.span
          key={`petal-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            width: 10,
            height: 10,
            background: 'rgba(255, 182, 193, 0.5)',
            borderRadius: '50% 0',
          }}
          animate={{ y: ['-100vh', '100vh'], rotate: [0, 360] }}
          transition={{ duration: 14, delay: i * 1.2, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  );
};

export default FloatingBackground;



