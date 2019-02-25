//Labeled Input Component

//Modules
import React from "react";
import PropTypes from "prop-types";
import "../index.css";

//Component
const LabeledInput = ({ label, children }) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      {children}
    </div>
  );
}

// Prop validation
LabeledInput.propTypes = {
  label: PropTypes.string,
  children: PropTypes.object,
};

//Export
export default LabeledInput;
