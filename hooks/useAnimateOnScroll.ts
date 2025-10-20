import { useEffect, useRef } from 'react';

/**
 * A custom hook that uses the Intersection Observer API to add a 'is-visible' class
 * to an element when it scrolls into the viewport. This can be used to trigger CSS animations.
 * @param stagger - If true, applies animations to direct children with a delay.
 * @returns A ref to be attached to the target HTML element.
 */
export const useAnimateOnScroll = <T extends HTMLElement>(stagger = false) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger) {
            const children = Array.from(element.children);
            children.forEach((child, index) => {
              if (child instanceof HTMLElement) {
                child.style.transitionDelay = `${index * 100}ms`;
                child.classList.add('is-visible');
              }
            });
          } else {
             element.classList.add('is-visible');
          }
          observer.unobserve(element); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [stagger]);

  return ref;
};
