import { CSSProperties, ReactNode } from 'react';
import { primary45 } from '../utils/colors';
import { useIsSmallScreen } from '../hooks/useIsSmallScreen';

interface ModalProps {
  onClose?: () => void;
  children: ReactNode;
  isVisible: boolean;
  style?: CSSProperties;
  positionTop?: number;
}

export function Modal({ onClose, children, isVisible, style, positionTop }: ModalProps) {
  const isSmallScreen = useIsSmallScreen();

  const styles: { container: CSSProperties; background: CSSProperties; outer: CSSProperties } = {
    outer: {},
    container: {
      position: isSmallScreen ? 'fixed' : 'absolute',
      backgroundColor: '#FFF',
      border: `1px solid ${primary45}`,
      borderRadius: 4,
      top: positionTop ? positionTop : isSmallScreen ? 60 : 150,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '94%',
      fontFamily: 'Open Sans',
      zIndex: 10000,
      boxShadow: '0 0px 14px hsla(0, 0%, 0%, 0.2)',
    },
    background: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundColor: '#00000033',
      zIndex: 5000,
    },
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div style={styles.outer}>
      <div style={styles.background} onClick={onClose} />
      <div style={{ ...styles.container, ...style }}>{children}</div>
    </div>
  );
}
