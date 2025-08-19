import React from 'react';
import { motion } from 'framer-motion';

interface ContactPageProps {
  businessHours: string;
  location: string;
}

const ContactPage: React.FC<ContactPageProps> = () => {
  const businessHours = "Monday - Friday: 9 AM - 6 PM";
  const location = "123 Glam Ave, Beauty City, CA 90210";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10 px-5">
      <motion.h1
        className="text-4xl font-bold text-orange-500 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>
      <div className="w-full max-w-lg bg-orange-100 p-8 rounded-lg shadow-lg">
        <form className="flex flex-col">
          <label className="text-lg text-orange-600 mb-2">Your Name</label>
          <input
            type="text"
            className="mb-4 p-2 border-2 border-orange-300 rounded focus:outline-none focus:border-orange-600"
            required
          />
          <label className="text-lg text-orange-600 mb-2">Email Address</label>
          <input
            type="email"
            className="mb-4 p-2 border-2 border-orange-300 rounded focus:outline-none focus:border-orange-600"
            required
          />
          <label className="text-lg text-orange-600 mb-2">Message</label>
          <textarea
            className="mb-4 p-2 border-2 border-orange-300 rounded focus:outline-none focus:border-orange-600"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-orange-500">Location</h2>
        <p className="text-lg text-gray-700 mt-2">{location}</p>
        <h2 className="text-2xl font-semibold text-orange-500 mt-4">Business Hours</h2>
        <p className="text-lg text-gray-700 mt-2">{businessHours}</p>
      </motion.div>
    </div>
  );
};

export default ContactPage;