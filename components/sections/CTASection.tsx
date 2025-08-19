import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = () => {
  return (
    <section className="bg-white text-orange-600 py-16 flex flex-col items-center justify-center">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Discover Your Glamour with GlamCS</h2>
        <p className="text-lg mb-6">
          Elevate your beauty routine with our luxurious cosmetics tailored for the modern individual. 
          Indulge in our premium collection designed to enhance your natural beauty.
        </p>
      </motion.div>
      <motion.a
        href="/shop"
        className="bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Shop Now
      </motion.a>
    </section>
  );
};

export default CTASection;