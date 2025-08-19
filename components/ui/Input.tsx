import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  validationMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col mb-5">
      <label className="text-orange-500 font-semibold mb-2">{label}</label>
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={border-2 rounded-lg p-3 transition duration-300 ease-in-out focus:outline-none 
          ${validationMessage ? 'border-red-500' : 'border-orange-300'} 
          ${isFocused ? 'border-orange-500' : 'border-gray-300'}}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-invalid={!!validationMessage}
        aria-describedby={validationMessage ? 'error-message' : undefined}
      />
      {validationMessage && (
        <p id="error-message" className="text-red-500 text-sm mt-1">
          {validationMessage}
        </p>
      )}
    </div>
  );
};

export default Input;