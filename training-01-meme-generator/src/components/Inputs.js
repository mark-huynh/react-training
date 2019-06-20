import React from "react";
import PropTypes from "prop-types";

const Inputs = ({ topLine, bottomLine, imageUrl, onLineChange }) => (
  <div className="inputs-container">
    <label>Top Line</label>
    <input name="topLine" onChange={onLineChange} value={topLine} />
    <label>Bottom Line</label>
    <input name="bottomLine" onChange={onLineChange} value={bottomLine} />
    <label>Image Url</label>
    <input name="imageUrl" onChange={onLineChange} value={imageUrl} />
  </div>
);

Inputs.propTypes = {
  topLine: PropTypes.string.isRequired,
  bottomLine: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onLineChange: PropTypes.func.isRequired
};

export default Inputs;
