import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Glam Starter',
    price: '$29',
    features: [
      'Complimentary Skin Assessment',
      'Customized Makeup Consultation',
      'Sample Product Kit',
      '10% Off First Purchase',
    ],
  },
  {
    name: 'Glam Essential',
    price: '$59',
    features: [
      'All Glam Starter Features',
      'Full Makeup Application',
      'Luxury Product Selection',
      'Exclusive Access to Online Tutorials',
    ],
  },
  {
    name: 'Glam Luxe',
    price: '$99',
    features: [
      'All Glam Essential Features',
      'Personalized Makeup Masterclass',
      'VIP Customer Support',
      'Free Shipping on All Orders',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-600 mb-8">GlamCS Pricing Plans</h2>
        <p className="text-lg text-gray-700 mb-12">Choose the perfect GlamCS service for your beauty journey.</p>
        <div className="flex justify-center items-stretch space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-2 border-orange-500 w-64 transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-800 mb-4">{tier.price}</p>
              <ul className="text-left mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 mb-2">
                    - {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;