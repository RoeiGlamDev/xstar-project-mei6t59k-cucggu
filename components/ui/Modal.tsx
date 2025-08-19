import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4">{title}</h2>
        <div className="mb-4 text-gray-700">{content}</div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-400 transition duration-300"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;