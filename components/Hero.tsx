import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Blobs (Spotlights) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-[-10%] right-1/4 w-[400px] h-[400px] bg-gray-500/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/2 w-[600px] h-[300px] bg-white/5 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          <span className="text-sm font-medium text-gray-300">Accepting new ambitious partners</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8"
        >
          We Turn <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-600">Hype</span> <br />
          Into Revenue.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Hypetoheaven is the growth partner for brands that refuse to play it safe. 
          We blend creative chaos with data-driven precision to scale your business beyond limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="secondary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Get Free Strategy
          </Button>
          <Button variant="outline" size="lg" icon={<PlayCircle className="w-5 h-5" />}>
            View Our Work
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-600">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-600 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;