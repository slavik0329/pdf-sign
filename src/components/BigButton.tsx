import { CSSProperties } from "react";
import { primary45 } from "../utils/colors";
import useHover from "../hooks/useHover";

interface BigButtonProps {
  title: string;
  onClick: () => void;
  inverted?: boolean;
  fullWidth?: boolean;
  customFillColor?: string;
  customWhiteColor?: string;
  style?: CSSProperties;
  noHover?: boolean;
  id?: string;
  small?: boolean;
  disabled?: boolean;
  marginRight?: number;
}

export function BigButton({
  title,
  onClick,
  inverted,
  fullWidth,
  customFillColor,
  customWhiteColor,
  style,
  noHover,
  id,
  small,
  disabled,
  marginRight,
}: BigButtonProps) {
  const [hoverRef, isHovered] = useHover();

  let fillColor = customFillColor || primary45;
  const whiteColor = customWhiteColor || "#FFF";

  let initialBg: string | undefined = undefined;
  let hoverBg: string | undefined = fillColor;

  let initialColor = fillColor;
  let hoverColor = whiteColor;

  if (inverted) {
    initialBg = fillColor;
    hoverBg = undefined;
    initialColor = whiteColor;
    hoverColor = fillColor;
  }

  if (disabled) {
    initialBg = "#ddd";
    hoverBg = "#ddd";
    fillColor = "#ddd";
  }

  const styles: { container: CSSProperties } = {
    container: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: fullWidth ? "100%" : undefined,
      backgroundColor: isHovered && !noHover ? hoverBg : initialBg,
      color:
        isHovered && !noHover && !disabled
          ? hoverColor
          : disabled
          ? "#999"
          : initialColor,
      borderRadius: 4,
      padding: small ? "2px 4px" : "6px 8px",
      fontSize: small ? 14 : undefined,
      border: `1px solid ${fillColor}`,
      cursor: !disabled ? "pointer" : undefined,
      userSelect: "none",
      boxSizing: "border-box",
      marginRight,
    },
  };

  return (
    <div
      id={id}
      ref={hoverRef}
      style={{ ...styles.container, ...style }}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      {title}
    </div>
  );
}
