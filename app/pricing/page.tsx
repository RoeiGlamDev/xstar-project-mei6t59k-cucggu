import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'GlamCS Luxe Package',
    description: 'Experience the ultimate in luxury with our premium cosmetics.',
    price: '$99',
    features: [
      'Exclusive product line',
      'Personalized consultation',
      'Free shipping on all orders',
      'Access to members-only events'
    ]
  },
  {
    title: 'GlamCS Essential Package',
    description: 'The essentials you need to look your best every day.',
    price: '$59',
    features: [
      'Curated product selection',
      'Monthly beauty tips',
      'Discount on future purchases'
    ]
  },
  {
    title: 'GlamCS Starter Package',
    description: 'Perfect for those new to cosmetics, our starter package has you covered.',
    price: '$29',
    features: [
      'Basic product line',
      'Online tutorials',
      'Exclusive community access'
    ]
  }
];

const FAQ = [
  {
    question: 'What is included in the GlamCS Luxe Package?',
    answer: 'The Luxe Package includes a personalized consultation, exclusive product line, and complimentary shipping.'
  },
  {
    question: 'Can I change my subscription later?',
    answer: 'Yes! You can upgrade or downgrade your package at any time.'
  },
  {
    question: 'How do I access the GlamCS community?',
    answer: 'Once you purchase any package, you will receive an invitation to join our private community online.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 p-8">
      <motion.h1
        className="text-4xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing Plans
      </motion.h1>
      <motion.p
        className="text-lg mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Discover the perfect GlamCS package tailored to your beauty needs.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-orange-600">{option.title}</h2>
            <p className="text-gray-700 my-2">{option.description}</p>
            <p className="text-xl font-bold text-orange-600">{option.price}</p>
            <ul className="list-disc list-inside mt-4">
              {option.features.map((feature, i) => (
                <li key={i} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-3xl font-bold text-orange-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="space-y-4">
        {FAQ.map((item, index) => (
          <motion.div
            key={index}
            className="bg-orange-50 p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="font-semibold text-gray-800">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;