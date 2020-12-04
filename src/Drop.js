import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cleanBorder, primary45 } from "./utils/colors";

export default function Drop({ onLoaded }) {
  const styles = {
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

  const onDrop = useCallback((acceptedFiles) => {
    onLoaded(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  return (
    <div {...getRootProps()} style={styles.container}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop a PDF here</p> : <p>Drag a PDF here</p>}
    </div>
  );
}
