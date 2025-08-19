import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText1: string;
  ctaText2: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Welcome to GlamCS", 
  subtitle = "Elevate your beauty with our luxurious cosmetics.", 
  ctaText1 = "Shop Now", 
  ctaText2 = "Explore Our Collection" 
}) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white">
      <div className="absolute inset-0">
        <img 
          src="/images/hero-background.png" 
          alt="GlamCS Background" 
          className="object-cover w-full h-full opacity-30"
        />
      </div>
      <div className="relative z-10 p-8 text-center text-white">
        <motion.h1 
          className="text-6xl font-bold mb-4 animate__animated animate__fadeInDown"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-2xl mb-8 animate__animated animate__fadeInUp"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.button 
            className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded hover:bg-orange-400 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText1}
          </motion.button>
          <motion.button 
            className="px-6 py-3 text-lg font-semibold text-white bg-white rounded hover:bg-orange-500 hover:text-white transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {ctaText2}
          </motion.button>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-300">Trusted by beauty enthusiasts worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;