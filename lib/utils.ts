import { CSSProperties } from 'react';

/
 * Utility functions for GlamCS application.
 * Provides helper methods for styling and formatting.
 * 
 * @module utils
 */

/
 * Common styles used across the GlamCS application.
 */
export const glamCSStyles: CSSProperties = {
    color: 'white',
    backgroundColor: 'orange',
    fontFamily: '"Arial", sans-serif',
    padding: '10px',
    borderRadius: '5px',
};

/
 * ClassNames utility function to concatenate class names.
 * 
 * @param {...string} classes - The class names to concatenate.
 * @returns {string} - The concatenated class names.
 */
export const cn = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
};

/
 * Formats a price to a string with currency.
 * 
 * @param {number} price - The price to format.
 * @param {string} currency - The currency symbol to use.
 * @returns {string} - The formatted price string.
 */
export const formatPrice = (price: number, currency: string = '$'): string => {
    return ${currency}${price.toFixed(2)};
};

/
 * Formats a product description to be more appealing for GlamCS products.
 * 
 * @param {string} description - The raw description of the product.
 * @returns {string} - The formatted description.
 */
export const formatProductDescription = (description: string): string => {
    return ✨ GlamCS presents: ${description} ✨;
};

/
 * GlamCS specific types and interfaces.
 */
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

/
 * Calculates the total price of items in the cart.
 * 
 * @param {CartItem[]} cartItems - The items in the shopping cart.
 * @returns {number} - The total price of the cart items.
 */
export const calculateTotalPrice = (cartItems: CartItem[]): number => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
};