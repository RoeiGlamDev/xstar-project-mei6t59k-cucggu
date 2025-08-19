import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-orange-300 p-2 backdrop-blur-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-md rounded-lg">
          <h2 className="text-orange-600 text-2xl font-bold text-center">{title}</h2>
        </div>
      </div>
      <p className="mt-4 text-gray-700 text-base text-center">{description}</p>
      <button className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 rounded-lg transition-colors duration-300 hover:bg-orange-600">
        Shop Now
      </button>
    </motion.div>
  );
};

export default Card;