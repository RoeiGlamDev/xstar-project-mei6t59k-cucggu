import { ThemeOptions } from '@mui/material/styles';

/
 * Constants and configuration for the GlamCS application.
 * This file contains brand-specific constants, color schemes, and
 * other configuration settings tailored for the GlamCS cosmetics brand.
 */

// Brand name constant
export const BRAND_NAME = "GlamCS";

// Color constants
export const COLORS = {
    PRIMARY: "#FFA500", // Orange
    SECONDARY: "#FFFFFF", // White
};

// Theme configuration for modern design
export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: COLORS.PRIMARY,
        },
        secondary: {
            main: COLORS.SECONDARY,
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            letterSpacing: '0.1rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
            letterSpacing: '0.05rem',
        },
    },
};

/
 * Interface for a cosmetic product in the GlamCS catalog.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Example data for GlamCS products.
 */
export const exampleProducts: CosmeticProduct[] = [
    {
        id: '1',
        name: 'Luxe Lipstick',
        description: 'A hydrating lipstick that provides rich color and luxurious shine.',
        price: 24.99,
        category: 'Lip Care',
        imageUrl: '/images/luxe-lipstick.jpg',
    },
    {
        id: '2',
        name: 'Silk Foundation',
        description: 'Lightweight foundation for a flawless finish and natural glow.',
        price: 39.99,
        category: 'Face Makeup',
        imageUrl: '/images/silk-foundation.jpg',
    },
    {
        id: '3',
        name: 'Glam Eyeshadow Palette',
        description: 'A versatile palette with 12 stunning shades for endless looks.',
        price: 49.99,
        category: 'Eye Makeup',
        imageUrl: '/images/glam-eyeshadow.jpg',
    },
];

// Exporting constants and types for use in other parts of the application
export default {
    BRAND_NAME,
    COLORS,
    themeOptions,
    exampleProducts,
};