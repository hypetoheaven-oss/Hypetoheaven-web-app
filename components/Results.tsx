import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import Button from './ui/Button';

const data = [
  { name: 'Jan', value: 100 },
  { name: 'Feb', value: 150 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 180 },
  { name: 'May', value: 300 },
  { name: 'Jun', value: 450 },
  { name: 'Jul', value: 680 },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Results That <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Speak Volume.</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        We don't deal in vanity metrics. We focus on ROAS, CAC, and LTV. 
                        See how we scaled "Client X" from $10k/mo to $68k/mo in just 7 months using our proprietary velocity framework.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-sm text-gray-500 mb-1">ROAS</div>
                            <div className="text-2xl font-bold text-white">4.5x</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="text-sm text-gray-500 mb-1">Revenue</div>
                            <div className="text-2xl font-bold text-white">+580%</div>
                        </div>
                    </div>

                    <Button variant="secondary">See Full Case Study</Button>
                </motion.div>

                {/* Graph */}
                <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="lg:w-1/2 w-full h-[400px] bg-black border border-white/10 rounded-2xl p-6 relative overflow-hidden shadow-2xl"
                >
                     <div className="absolute top-6 left-6 z-10">
                        <h3 className="font-semibold text-white">Revenue Growth</h3>
                        <p className="text-xs text-gray-500">Last 7 Months</p>
                     </div>
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2}/>
                                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                            <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}k`} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#000000', border: '1px solid #333', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#ffffff" 
                                strokeWidth={2}
                                fillOpacity={1} 
                                fill="url(#colorValue)" 
                            />
                        </AreaChart>
                     </ResponsiveContainer>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Results;