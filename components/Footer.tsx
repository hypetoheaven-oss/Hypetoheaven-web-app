import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-sm">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden bg-white/5 border border-white/10">
                       <img 
                        src="https://media.licdn.com/dms/image/v2/D4D0BAQHK3V7y5E3DxA/company-logo_200_200/company-logo_200_200/0/1715942478558/hypetoheaven_logo?e=1767225600&v=beta&t=SKSHfBmxeaanFk_Ta6QP8M86pgc5UnJHD-FboTB8rQE" 
                        alt="Hypetoheaven Logo" 
                        className="w-full h-full object-cover"
                       />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">
                        Hypetoheaven
                    </span>
                </div>
                
                <div className="flex gap-6 text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">Work</a>
                    <a href="#" className="hover:text-white transition-colors">Services</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>

                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>
            </div>
            
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-gray-600">
                <p>&copy; {new Date().getFullYear()} Hypetoheaven Agency. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;