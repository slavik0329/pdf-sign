import { useWindowSize } from './useWindowSize';

export function useIsSmallScreen(): boolean {
  const windowSize = useWindowSize();
  return (windowSize.width ?? 0) < 600;
}
