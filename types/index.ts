import { Product } from './product';
import { User } from './user';

/
 * Represents the GlamCS Cosmetics brand.
 * This is the main interface for the GlamCS cosmetics application.
 */
export interface GlamCSBrand {
    name: string; // The name of the brand
    establishedYear: number; // The year the brand was established
    colors: string[]; // The brand colors representing the brand identity
}

/
 * Represents a cosmetics product in the GlamCS catalog.
 */
export interface GlamCSProduct extends Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Detailed description of the product
    price: number; // Price of the product
    category: string; // The category of the product (e.g., lipstick, foundation)
    ingredients: string[]; // List of ingredients used in the product
    isFeatured: boolean; // Indicates if the product is a featured item
    images: string[]; // Array of image URLs for the product
}

/
 * Represents a user in the GlamCS cosmetics application.
 */
export interface GlamCSUser extends User {
    id: string; // Unique identifier for the user
    username: string; // The username of the user
    email: string; // The email address of the user
    password: string; // The user's password
    preferences: string[]; // User's preferences for product types
}

/
 * Represents the shopping cart for the GlamCS cosmetics application.
 */
export interface GlamCSShoppingCart {
    userId: string; // ID of the user owning the cart
    items: GlamCSProduct[]; // Array of products in the cart
    totalPrice: number; // Total price of items in the cart
    addItem(product: GlamCSProduct): void; // Method to add an item to the cart
    removeItem(productId: string): void; // Method to remove an item from the cart
    clearCart(): void; // Method to clear all items from the cart
}

/
 * Represents the GlamCS brand information.
 */
export const glamCSBrand: GlamCSBrand = {
    name: "GlamCS",
    establishedYear: 2023,
    colors: ["#FFA500", "#FFFFFF"] // Orange and white colors
};