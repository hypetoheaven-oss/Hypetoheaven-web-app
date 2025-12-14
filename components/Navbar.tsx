import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Image */}
          <div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden bg-white/5 border border-white/10">
             <img 
              src="https://media.licdn.com/dms/image/v2/D4D0BAQHK3V7y5E3DxA/company-logo_200_200/company-logo_200_200/0/1715942478558/hypetoheaven_logo?e=1767225600&v=beta&t=SKSHfBmxeaanFk_Ta6QP8M86pgc5UnJHD-FboTB8rQE" 
              alt="Hypetoheaven Logo" 
              className="w-full h-full object-cover"
             />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase">
            Hypetoheaven
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Process', 'Results', 'About'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button variant="primary" size="sm">Get Strategy</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
             {['Services', 'Process', 'Results', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
             <Button variant="primary" className="w-full">Get Strategy</Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;