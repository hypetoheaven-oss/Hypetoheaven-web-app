import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "CEO",
    company: "Lumina Skin",
    content: "We worked with three different agencies before finding Hypetoheaven. They were the first ones to actually understand our brand voice while delivering insane ROAS. We scaled 3x in 90 days.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Marcus Thorne",
    role: "Founder",
    company: "Apex Gear",
    content: "The creative output from this team is unmatched. They don't just run ads; they build entire creative strategies that convert cold traffic like I've never seen before.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    company: "TechFlow",
    content: "Professional, transparent, and absolutely lethal when it comes to growth hacking. Hypetoheaven is the best investment we made this year.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold">Don't take our word for it.</h2>
        </div>

        <div className="relative">
             <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative"
                >
                    <Quote className="absolute top-8 left-8 w-10 h-10 text-white/10" />
                    
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-200 mb-8 relative z-10 font-light italic">
                        "{testimonials[current].content}"
                    </p>

                    <div className="flex items-center gap-4">
                        <img 
                            src={testimonials[current].image} 
                            alt={testimonials[current].name} 
                            className="w-12 h-12 rounded-full border border-white/20 grayscale"
                        />
                        <div>
                            <div className="font-bold text-white">{testimonials[current].name}</div>
                            <div className="text-sm text-gray-500">{testimonials[current].role}, {testimonials[current].company}</div>
                        </div>
                    </div>
                </motion.div>
             </AnimatePresence>

             {/* Controls */}
             <div className="flex justify-center gap-4 mt-8">
                <button onClick={prev} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={next} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white">
                    <ChevronRight className="w-6 h-6" />
                </button>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;