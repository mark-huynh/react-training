import React from "react";

const Input = ({ handleChange, topLine, bottomLine }) => {
  return (
    <div>
      <input
        onChange={handleChange}
        name="topLine"
        value={topLine}
        id="top-line-input"
      />
      <input
        onChange={handleChange}
        name="bottomLine"
        value={bottomLine}
        id="bottom-line-input"
      />
    </div>
  );
};

export default Input;
