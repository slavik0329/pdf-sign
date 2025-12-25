import { CSSProperties, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cleanBorder, primary45 } from "./utils/colors";

interface DropProps {
  onLoaded: (files: File[]) => void;
}

export default function Drop({ onLoaded }: DropProps) {
  const styles: { container: CSSProperties } = {
    container: {
      textAlign: "center",
      border: cleanBorder,
      padding: 20,
      marginTop: 12,
      color: primary45,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 4,
      userSelect: "none",
      outline: 0,
      cursor: "pointer",
    },
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onLoaded(acceptedFiles);
  }, [onLoaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
  });

  return (
    <div {...getRootProps()} style={styles.container}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop a PDF here</p> : <p>Drag a PDF here</p>}
    </div>
  );
}
