import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Zap, BarChart } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: (ProcessStep & { icon: any })[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "We dive deep into your metrics, finding the leaks in your funnel and the hidden gold mines.",
    icon: Search
  },
  {
    number: "02",
    title: "Strategic Roadmap",
    description: "We build a custom growth blueprint tailored to your specific unit economics and goals.",
    icon: Lightbulb
  },
  {
    number: "03",
    title: "Rapid Execution",
    description: "We launch high-velocity campaigns, testing creatives and audiences relentlessly.",
    icon: Zap
  },
  {
    number: "04",
    title: "Scale & Optimize",
    description: "We double down on winners, cut losers, and scale your revenue profitably.",
    icon: BarChart
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-20">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-gray-500 font-medium tracking-wider uppercase text-sm border border-white/10 px-3 py-1 rounded-full"
                >
                    How We Work
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mt-6"
                >
                    From Chaos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">Clarity</span>
                </motion.h2>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group bg-black border border-white/10 p-6 rounded-2xl hover:border-white/30 transition-colors z-10"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                <step.icon className="w-5 h-5" />
                            </div>
                            
                            <div className="text-4xl font-bold text-white/5 absolute top-4 right-6 group-hover:text-white/10 transition-colors">
                                {step.number}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Process;