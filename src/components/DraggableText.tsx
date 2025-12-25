import { CSSProperties, useState, useEffect, useRef } from "react";
import Draggable, { DraggableData } from "react-draggable";
import { FaCheck, FaTimes } from "react-icons/fa";
import { errorColor, goodColor, primary45 } from "../utils/colors";

interface DraggableTextProps {
  onEnd: (data: DraggableData) => void;
  onSet: (text: string) => void;
  onCancel: () => void;
  initialText?: string | null;
}

export default function DraggableText({ onEnd, onSet, onCancel, initialText }: DraggableTextProps) {
  const [text, setText] = useState("Text");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialText) {
      setText(initialText);
    } else {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [initialText]);

  const styles: {
    container: CSSProperties;
    controls: CSSProperties;
    smallButton: CSSProperties;
    input: CSSProperties;
  } = {
    container: {
      position: "absolute",
      zIndex: 100000,
      border: `2px solid ${primary45}`,
    },
    controls: {
      position: "absolute",
      right: 0,
      display: "inline-block",
      backgroundColor: primary45,
    },
    smallButton: {
      display: "inline-block",
      cursor: "pointer",
      padding: 4,
    },
    input: {
      border: 0,
      fontSize: 20,
      padding: 3,
      backgroundColor: 'rgba(0,0,0,0)',
      cursor: 'move'
    }
  };

  return (
    <Draggable onStop={(e, data) => onEnd(data)}>
      <div style={styles.container}>
        <div style={styles.controls}>
          <div style={styles.smallButton} onClick={() => onSet(text)}>
            <FaCheck color={goodColor} />
          </div>
          <div style={styles.smallButton} onClick={onCancel}>
            <FaTimes color={errorColor} />
          </div>
        </div>
        <input
          ref={inputRef}
          style={styles.input}
          value={text}
          placeholder={'Text'}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </Draggable>
  );
}
