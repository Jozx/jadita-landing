import { useEffect, useRef, useState, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  once?: boolean;
}

/**
 * Returns a ref and whether the element is in the viewport.
 * By default, fires only once (once the element enters, stays "in view").
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
): { ref: RefObject<T | null>; inView: boolean } {
  const { threshold = 0.12, once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

