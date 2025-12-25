import { primary45 } from "./utils/colors";
import { CSSProperties } from "react";

export function Header() {
  const styles: { container: CSSProperties } = {
    container: {
      backgroundColor: primary45,
      color: '#FFF',
      padding: 12,
      fontWeight: 600,
    }
  };

  return (
    <div style={styles.container}>
      <div>Open PDF Sign</div>
    </div>
  );
}
