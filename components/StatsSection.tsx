import React from 'react';
import { motion } from 'framer-motion';

interface StatsData {
  title: string;
  count: number;
  description: string;
}

const stats: StatsData[] = [
  { title: 'Products Launched', count: 150, description: 'Innovative cosmetics tailored for every beauty need.' },
  { title: 'Happy Customers', count: 12000, description: 'Join our community of satisfied GlamCS users.' },
  { title: 'Global Presence', count: 35, description: 'Selling in over 35 countries worldwide.' },
  { title: 'Awards Won', count: 10, description: 'Recognized for excellence in the cosmetics industry.' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-orange-600 mb-12">GlamCS Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <motion.h3
                  className="text-4xl font-bold text-orange-600 mb-2"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.count}
                </motion.h3>
                <p className="text-lg text-gray-700">{stat.title}</p>
                <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;