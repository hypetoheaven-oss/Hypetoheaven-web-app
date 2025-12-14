import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-black pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl">
                <div className="text-center mb-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Scale?</span>
                    </motion.h2>
                    <p className="text-gray-400 text-lg">
                        Book your free growth strategy call. No fluff, just actionable insights.
                    </p>
                </div>

                <form className="space-y-6 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Work Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Website URL</label>
                            <input 
                                type="url" 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                                placeholder="https://company.com"
                            />
                        </div>
                    </div>
                    
                    <Button variant="secondary" className="w-full justify-center">
                        Claim Your Free Audit
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500 mt-4">
                        Limited spots available for this month.
                    </p>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Contact;