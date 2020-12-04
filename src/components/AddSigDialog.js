import { Dialog } from "./Dialog";
import SignatureCanvas from "react-signature-canvas";
import { ConfirmOrCancel } from "./ConfirmOrCancel";
import { primary45 } from "../utils/colors";
import { useRef } from "react";

export function AddSigDialog({ onConfirm, onClose, autoDate, setAutoDate }) {
  const sigRef = useRef(null);

  const styles = {
    sigContainer: {
      display: "flex",
      justifyContent: "center",
    },
    sigBlock: {
      display: "inline-block",
      border: `1px solid ${primary45}`,
    },
    instructions: {
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      color: primary45,
      marginTop: 8,
      width: 600,
      alignSelf: "center",
    },
    instructionsContainer: {
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <Dialog
      isVisible={true}
      title={"Add signature"}
      body={
        <div style={styles.container}>
          <div style={styles.sigContainer}>
            <div style={styles.sigBlock}>
              <SignatureCanvas
                velocityFilterWeight={1}
                ref={sigRef}
                canvasProps={{
                  width: "600",
                  height: 200,
                  className: "sigCanvas",
                }}
              />
            </div>
          </div>
          <div style={styles.instructionsContainer}>
            <div style={styles.instructions}>
              <div>
                Auto date/time{" "}
                <input
                  type={"checkbox"}
                  checked={autoDate}
                  onChange={(e) => setAutoDate(e.target.checked)}
                />
              </div>
              <div>Draw your signature above</div>
            </div>
          </div>

          <ConfirmOrCancel
            onCancel={onClose}
            onConfirm={() => {
              const sigURL = sigRef.current.toDataURL();
              onConfirm(sigURL);
            }}
          />
        </div>
      }
    />
  );
}
