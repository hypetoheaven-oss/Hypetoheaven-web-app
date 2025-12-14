import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    The <span className="text-gray-500 line-through decoration-1">Old Way</span> vs. <br/>
                    The <span className="text-white">Hypetoheaven</span> Way.
                </h2>
                <p className="text-gray-400 text-lg">
                    Traditional agencies sell hours. We sell outcomes. Stop paying for "brand awareness" that you can't measure and start paying for growth you can bank.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute inset-0 bg-white/5 blur-3xl opacity-20 rounded-full" />
                
                <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
                    
                    {/* Comparison Header */}
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
                        <div className="text-gray-500 font-medium text-center">Typical Agency</div>
                        <div className="text-white font-bold text-center">Hypetoheaven</div>
                    </div>

                    {/* Comparison Rows */}
                    <div className="space-y-6">
                        {[
                            { label: "Focus", bad: "Deliverables", good: "Revenue & ROI" },
                            { label: "Reporting", bad: "Monthly PDFs", good: "Real-time Dashboards" },
                            { label: "Speed", bad: "Weeks to launch", good: "Days to launch" },
                            { label: "Strategy", bad: "Guesswork", good: "Data-Backed" },
                        ].map((item, idx) => (
                            <div key={idx} className="grid grid-cols-2 gap-4 text-sm md:text-base">
                                <div className="flex items-center gap-2 text-gray-600 justify-start opacity-70">
                                    <X className="w-4 h-4 text-red-900/50 shrink-0" />
                                    {item.bad}
                                </div>
                                <div className="flex items-center gap-2 text-white justify-start font-medium bg-white/5 rounded px-2 py-1 border border-white/5">
                                    <Check className="w-4 h-4 text-white shrink-0" />
                                    {item.good}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;