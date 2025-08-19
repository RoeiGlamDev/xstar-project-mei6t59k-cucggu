import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-orange-600 text-2xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={logo} alt="GlamCS Logo" className="h-10" />
          GlamCS
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#products"
            className="text-gray-700 hover:text-orange-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-700 hover:text-orange-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#blog"
            className="text-gray-700 hover:text-orange-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Blog
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-700 hover:text-orange-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <nav className="flex flex-col p-4 space-y-2">
            <motion.a
              href="#products"
              className="text-gray-700 hover:text-orange-600 transition duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Products
            </motion.a>
            <motion.a
              href="#about"
              className="text-gray-700 hover:text-orange-600 transition duration-200"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.a
              href="#blog"
              className="text-gray-700 hover:text-orange-600 transition duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Blog
            </motion.a>
            <motion.a
              href="#contact"
              className="text-gray-700 hover:text-orange-600 transition duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;