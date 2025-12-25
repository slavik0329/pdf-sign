import { CSSProperties, ReactNode } from 'react';
import { primary45 } from '../utils/colors';
import { FaTimes } from 'react-icons/fa';
import { Modal } from './Modal';

interface DialogProps {
  isVisible: boolean;
  body: ReactNode;
  onClose?: () => void;
  title: string;
  noPadding?: boolean;
  backgroundColor?: string;
  positionTop?: number;
  style?: CSSProperties;
}

export function Dialog({
  isVisible,
  body,
  onClose,
  title,
  noPadding,
  backgroundColor,
  positionTop,
  style,
}: DialogProps) {
  if (!isVisible) {
    return null;
  }

  const styles: { header: CSSProperties; body: CSSProperties; xIcon: CSSProperties } = {
    header: {
      backgroundColor: primary45,
      color: '#FFF',
      padding: 8,
      fontSize: 14,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    body: {
      padding: noPadding ? 0 : 14,
      backgroundColor: backgroundColor ? backgroundColor : '#FFF',
    },
    xIcon: {
      cursor: 'pointer',
    },
  };

  return (
    <Modal onClose={onClose} isVisible={isVisible} positionTop={positionTop} style={style}>
      <div>
        <div style={styles.header}>
          <div>{title}</div>
          <FaTimes
            color={'#FFF'}
            size={16}
            style={styles.xIcon}
            className={'dialogClose'}
            onClick={onClose}
          />
        </div>
        <div style={styles.body}>{body}</div>
      </div>
    </Modal>
  );
}
