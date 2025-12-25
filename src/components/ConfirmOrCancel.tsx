import { BigButton } from "./BigButton";
import { CSSProperties, ReactNode } from "react";

interface ConfirmOrCancelProps {
  onCancel: () => void;
  onConfirm: () => void;
  confirmTitle?: string;
  leftBlock?: ReactNode;
  hideCancel?: boolean;
  disabled?: boolean;
}

export function ConfirmOrCancel({
  onCancel,
  onConfirm,
  confirmTitle = "Confirm",
  leftBlock,
  hideCancel,
  disabled
}: ConfirmOrCancelProps) {
  const styles: { actions: CSSProperties; cancel: CSSProperties } = {
    actions: {
      display: "flex",
      justifyContent: "space-between",
    },
    cancel: {
      marginRight: 8,
    },
  };

  return (
    <div style={styles.actions}>
      <div>{leftBlock}</div>
      <div>
        {!hideCancel ? (
          <BigButton
            title={"Cancel"}
            style={styles.cancel}
            onClick={onCancel}
          />
        ) : null}
        <BigButton title={confirmTitle} inverted={true} onClick={onConfirm} disabled={disabled}/>
      </div>
    </div>
  );
}
