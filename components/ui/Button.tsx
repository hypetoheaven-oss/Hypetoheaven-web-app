import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-400 text-black shadow-lg hover:shadow-white/25 border border-white/10",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      
      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-gray-300 opacity-80 blur-lg group-hover:opacity-100 transition-opacity" />
      )}
    </motion.button>
  );
};

export default Button;