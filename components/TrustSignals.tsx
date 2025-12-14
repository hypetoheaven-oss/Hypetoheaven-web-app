import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: "Brands Scaled", value: 150, suffix: "+", prefix: "" },
  { label: "Ad Spend Managed", value: 50, suffix: "M+", prefix: "$" },
  { label: "Average Growth", value: 300, suffix: "%", prefix: "" },
  { label: "Campaigns Launched", value: 1200, suffix: "+", prefix: "" },
];

const Counter: React.FC<{ value: number; duration?: number; prefix?: string; suffix?: string }> = ({ 
  value, 
  duration = 2,
  prefix = "",
  suffix = ""
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalDuration = duration * 1000;
      const incrementTime = totalDuration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(prev => {
            if (prev < end) return prev + 1;
            clearInterval(timer);
            return end;
        });
        if (start === end) clearInterval(timer);
      }, Math.max(incrementTime, 10)); // Min 10ms to prevent lag

      // Fallback for large numbers to jump faster
      if (incrementTime < 10) {
           const step = Math.ceil(end / (totalDuration / 16)); // ~60fps
           const fastTimer = setInterval(() => {
                setCount(prev => {
                    const next = prev + step;
                    if (next >= end) {
                        clearInterval(fastTimer);
                        return end;
                    }
                    return next;
                });
           }, 16);
           return () => clearInterval(fastTimer);
      }
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

const TrustSignals: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        
        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 mb-20">
           {/* Placeholders for logos - In production use SVGs */}
           {['Acme Corp', 'Nebula', 'Velocity', 'Quotient', 'Sphere'].map((brand, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                whileInView={{ opacity: 0.5, filter: 'blur(0px)' }}
                whileHover={{ 
                    scale: 1.1, 
                    opacity: 1, 
                    textShadow: "0 0 10px rgba(255,255,255,0.8)",
                    transition: { duration: 0.2 } 
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-xl font-bold font-serif tracking-widest text-white cursor-pointer select-none"
            >
                {brand}
             </motion.div>
           ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 mb-2">
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;