import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Samantha J.',
    photo: '/images/testimonials/samantha.jpg',
    review: 'GlamCS transformed my makeup routine! Their products are luxurious and long-lasting. I feel like a queen every time I use them!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica R.',
    photo: '/images/testimonials/jessica.jpg',
    review: 'I absolutely love the GlamCS lipsticks! The colors are vibrant and the formula is super hydrating. Highly recommend!',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Emily T.',
    photo: '/images/testimonials/emily.jpg',
    review: 'The GlamCS skincare line has worked wonders for my skin! I’ve never felt more confident.',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-orange-600 mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, photo, review, rating }) => (
            <motion.div
              key={id}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={photo} alt={name} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-orange-600">{name}</h3>
              <p className="text-gray-700 mb-4">{review}</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={w-5 h-5 ${index < rating ? 'text-orange-500' : 'text-gray-300'}}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.536L0 7.909l6.556-.553L10 1l2.444 5.356L20 7.909l-5.244 3.645 1.122 6.536z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;