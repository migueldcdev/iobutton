import React, { useState } from "react";

interface CloseButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const closeButtonStyle = {
    backgroundColor: isHovered ? "#fafafa" : "",
    cursor: "pointer",
    padding: "6px",
    borderRadius: "4px",
  };

  return (
    <button
      onClick={onClick}
      style={closeButtonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 50 50"
      >
        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
      </svg>
    </button>
  );
};

export default CloseButton;
