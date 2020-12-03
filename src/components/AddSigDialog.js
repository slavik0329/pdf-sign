import { Dialog } from "./Dialog";
import SignatureCanvas from "react-signature-canvas";
import { ConfirmOrCancel } from "./ConfirmOrCancel";
import { primary45 } from "../utils/colors";
import { useRef } from "react";

export function AddSigDialog({ onConfirm, onClose }) {
  const sigRef = useRef(null);

  const styles = {
    sigContainer: {
      display: 'flex',
      justifyContent: 'center'
    },
    sigBlock: {
      display: "inline-block",
      border: `1px solid ${primary45}`,
    },
    instructions: {
      textAlign: 'center',
      color: primary45,
      marginTop: 8
    }
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
          <div style={styles.instructions}>Draw your signature above</div>

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
