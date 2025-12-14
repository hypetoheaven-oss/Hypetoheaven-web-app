import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Zap, Users, PenTool, BarChart3 } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Performance Ads",
    description: "Meta, Google, & TikTok ads that don't just get clicks—they print money.",
    icon: TrendingUp
  },
  {
    title: "Brand Strategy",
    description: "Positioning that separates you from the noise and builds a cult following.",
    icon: Rocket
  },
  {
    title: "Social Media",
    description: "Community-first content that turns passive followers into active buyers.",
    icon: Users
  },
  {
    title: "Influencer Marketing",
    description: "Authentic partnerships with creators who actually sway decisions.",
    icon: Zap
  },
  {
    title: "Content Creation",
    description: "High-octane visuals and copy designed to stop the scroll instantly.",
    icon: PenTool
  },
  {
    title: "Growth Analytics",
    description: "We track every pixel to ensure every dollar spent returns two.",
    icon: BarChart3
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6"
                >
                    Our Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Ecosystem</span>
                </motion.h2>
                <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="text-gray-400 text-lg"
                >
                    Everything you need to dominate your market, all under one roof. No silos, just results.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                <service.icon className="w-6 h-6 text-white group-hover:text-black" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;