import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const featureVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const GlamCS: React.FC = () => {
  return (
    <div className="bg-white text-orange-600">
      {/ Hero Section /}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-orange-300 to-white">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8 }}
        >
          Welcome to GlamCS
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-8"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover luxury cosmetics designed to enhance your natural beauty.
        </motion.p>
        <motion.button
          className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition duration-300"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Shop Now
        </motion.button>
      </section>

      {/ Features Section /}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-orange-600 mb-12">Our Luxurious Products</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {productFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

interface ProductFeature {
  title: string;
  description: string;
}

const productFeatures: ProductFeature[] = [
  {
    title: 'Luxury Lipstick',
    description: 'Indulge in our creamy, smooth lipsticks that provide vibrant color and hydration.',
  },
  {
    title: 'Radiant Foundation',
    description: 'Achieve a flawless complexion with our lightweight, buildable foundation.',
  },
  {
    title: 'Elegant Eyeshadow Palette',
    description: 'Unleash your creativity with our versatile eyeshadow palette featuring rich pigments.',
  },
];

export default GlamCS;