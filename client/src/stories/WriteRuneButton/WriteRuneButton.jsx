import React from "react";
import PropTypes from "prop-types";
import "./writeRuneButton.css";

export default function WriteRuneButton({ color, size, label }) {
  return (
    <button type="button" className={`write-rune-button ${color} ${size}`}>
      {label}
    </button>
  );
}

WriteRuneButton.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["green", "white", "black"]),
  onClick: PropTypes.func,
};
