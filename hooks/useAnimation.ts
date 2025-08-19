import { useEffect, useRef, useState } from 'react';

/
 * @interface AnimationOptions
 * @property {boolean} isVisible - Determines if the animation should be visible.
 * @property {number} duration - Duration of the animation in milliseconds.
 * @property {string} animationType - Type of animation to apply (e.g., 'fade', 'slide').
 */
interface AnimationOptions {
  isVisible: boolean;
  duration?: number;
  animationType?: 'fade' | 'slide' | 'bounce';
}

/
 * useAnimation hook for GlamCS cosmetics website.
 * Handles custom animations for components to enhance user experience.
 *
 * @param {AnimationOptions} options - Options for the animation.
 * @returns {string} - CSS class name for the animation.
 */
const useAnimation = (options: AnimationOptions): string => {
  const [animationClass, setAnimationClass] = useState('');
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (options.isVisible) {
      const animationClassName = animate-${options.animationType || 'fade'};
      setAnimationClass(animationClassName);
      if (animationRef.current) {
        animationRef.current.style.transitionDuration = ${options.duration || 500}ms;
      }
    } else {
      setAnimationClass('');
    }
  }, [options]);

  return animationClass;
};

/
 * @function apply3DEffects
 * @description Applies 3D effects to GlamCS components for a luxurious feel.
 * @param {HTMLElement} element - The element to apply the 3D effect to.
 */
const apply3DEffects = (element: HTMLElement) => {
  if (element) {
    element.style.transform = 'perspective(1000px) rotateY(10deg)';
    element.style.transition = 'transform 0.5s ease-in-out';
  }
};

/
 * @function remove3DEffects
 * @description Removes 3D effects from GlamCS components.
 * @param {HTMLElement} element - The element to remove the 3D effect from.
 */
const remove3DEffects = (element: HTMLElement) => {
  if (element) {
    element.style.transform = 'none';
  }
};

export { useAnimation, apply3DEffects, remove3DEffects };