import { CSSProperties } from "react";
import Draggable, { DraggableData } from "react-draggable";
import { FaCheck, FaTimes } from 'react-icons/fa';
import { errorColor, goodColor, primary45 } from "../utils/colors";

interface DraggableSignatureProps {
  url: string;
  onEnd: (data: DraggableData) => void;
  onSet: () => void;
  onCancel: () => void;
}

export default function DraggableSignature({ url, onEnd, onSet, onCancel }: DraggableSignatureProps) {
  const styles: {
    container: CSSProperties;
    controls: CSSProperties;
    smallButton: CSSProperties;
    img: CSSProperties;
  } = {
    container: {
      position: 'absolute',
      zIndex: 100000,
      border: `2px solid ${primary45}`,
    },
    controls: {
      position: 'absolute',
      right: 0,
      display: 'inline-block',
      backgroundColor: primary45,
    },
    smallButton: {
      display: 'inline-block',
      cursor: 'pointer',
      padding: 4,
    },
    img: {},
  };

  return (
    <Draggable onStop={(e, data) => onEnd(data)}>
      <div style={styles.container}>
        <div style={styles.controls}>
          <div style={styles.smallButton} onClick={onSet}><FaCheck color={goodColor}/></div>
          <div style={styles.smallButton} onClick={onCancel}><FaTimes color={errorColor}/></div>
        </div>
        <img src={url} width={200} style={styles.img} draggable={false} alt="Signature" />
      </div>
    </Draggable>
  );
}
