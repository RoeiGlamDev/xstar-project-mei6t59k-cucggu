import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title?: string;
  description?: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title = "Join the GlamCS Family", description = "Subscribe to our newsletter for the latest in luxury cosmetics and exclusive offers." }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setIsSubscribed(true);
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold text-orange-500 mb-4" 
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {description}
        </motion.p>
        {isSubscribed ? (
          <motion.div 
            className="text-green-500 font-semibold"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to GlamCS!
          </motion.div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center items-center">
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
              className="border border-orange-500 rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <motion.button 
              type="submit" 
              className="bg-orange-500 text-white rounded-r-lg p-2 hover:bg-orange-600 transition duration-300" 
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;