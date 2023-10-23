import React from "react";
import PropTypes from "prop-types";
import "./eraseRuneButton.css";

export default function EraseRuneButton({ label }) {
  return <button type="button">{label}</button>;
}

EraseRuneButton.propTypes = {
  label: PropTypes.string,
};
