import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-semibold focus:outline-none transition-all duration-300 ease-in-out';
    const primaryStyles = 'bg-orange-500 text-white shadow-lg hover:shadow-xl hover:bg-orange-600';
    const secondaryStyles = 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white';

    const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

    return (
        <motion.button 
            className={${baseStyles} ${styles}} 
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={GlamCS ${variant} button}
        >
            {children}
        </motion.button>
    );
};

export default Button;