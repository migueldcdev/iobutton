import React from "react";
import "./styles.css";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  width?: string;
  padding?: string;
  paddingX?: string;
  paddingY?: string;
  background?: string;
  color?: string;
  border?: string;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
  title = "Click Me",
  type = "button",
  onClick,
  disabled = false,
  width = "base",
  padding = "base",
  background = "white",
  color = "base",
  border = "none",
  borderRadius = "base",
}) => {
  const classNames = [
    `w-${width}`,
    `p-${padding}`,
    `bg-${background}`,
    `text-${color}`,
    `border-${border}`,
    `borderRadius-${borderRadius}`,
  ].join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
    >
      {title}
    </button>
  );
};

export default Button;
