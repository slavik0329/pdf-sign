import { useCallback, useRef, useState } from 'react';

type CallbackRef = (node: HTMLElement | null) => void;

export default function useHover(): [CallbackRef, boolean] {
  const [value, setValue] = useState(false);

  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  const ref = useRef<HTMLElement | null>(null);

  const callbackRef: CallbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener('mouseenter', handleMouseOver);
        ref.current.removeEventListener('mouseleave', handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener('mouseenter', handleMouseOver);
        ref.current.addEventListener('mouseleave', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value];
}
