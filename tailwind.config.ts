import type { Config } from 'tailwindcss';

/
 * Tailwind CSS configuration for GlamCS cosmetics website.
 * This configuration sets up a custom color palette and animations
 * that align with the modern and elegant aesthetic of the GlamCS brand.
 */
const tailwindConfig: Config = {
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6A13', // Main GlamCS orange color
        },
        white: {
          DEFAULT: '#FFFFFF', // Main GlamCS white color
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};

export default tailwindConfig;