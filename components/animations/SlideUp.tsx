import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const slideUpAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      className="flex justify-center items-center"
      variants={slideUpAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Welcome to GlamCS</h2>
        <p className="text-gray-700 text-lg">
          Discover the luxury of GlamCS cosmetics, where elegance meets quality. Our high-end products are designed to enhance your natural beauty with a modern twist.
        </p>
        <p className="text-gray-600 mt-2">
          Experience our exquisite range of lipsticks, foundations, and skincare products crafted for the discerning beauty enthusiast. Join us in redefining glamour with GlamCS.
        </p>
      </div>
    </motion.div>
  );
};

export default SlideUp;