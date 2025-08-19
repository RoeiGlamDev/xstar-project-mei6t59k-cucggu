import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  socialLinks: { name: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/GlamCS' },
    { name: 'Facebook', url: 'https://facebook.com/GlamCS' },
    { name: 'Twitter', url: 'https://twitter.com/GlamCS' },
  ];

  return (
    <footer className="bg-white p-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4">{companyName}</h2>
        <nav className="mb-4">
          <a href="/about" className="text-gray-700 hover:text-orange-500 mx-2">About Us</a>
          <a href="/products" className="text-gray-700 hover:text-orange-500 mx-2">Products</a>
          <a href="/contact" className="text-gray-700 hover:text-orange-500 mx-2">Contact</a>
          <a href="/faq" className="text-gray-700 hover:text-orange-500 mx-2">FAQ</a>
        </nav>
        <p className="text-gray-600 mb-4">Elevate your beauty routine with GlamCS's luxurious cosmetics.</p>
        <div className="flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <p className="text-gray-500 mt-4">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;