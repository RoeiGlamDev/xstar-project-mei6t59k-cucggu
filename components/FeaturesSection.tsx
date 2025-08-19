import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'High-Quality Ingredients',
    description: 'Experience the luxurious feel of our products made with the finest ingredients for your skin.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    id: 2,
    title: 'Cruelty-Free & Eco-Friendly',
    description: 'At GlamCS, we believe in beauty without harm. All our products are cruelty-free and eco-friendly.',
    icon: <i className="fas fa-recycle text-orange-500"></i>,
  },
  {
    id: 3,
    title: 'Innovative Formulations',
    description: 'Discover our cutting-edge formulations designed to enhance your natural beauty and confidence.',
    icon: <i className="fas fa-flask text-orange-500"></i>,
  },
  {
    id: 4,
    title: 'Elegant Packaging',
    description: 'Our products come in beautifully designed packaging that reflects the luxury of GlamCS.',
    icon: <i className="fas fa-gift text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-orange-500 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover GlamCS Features
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-500">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;