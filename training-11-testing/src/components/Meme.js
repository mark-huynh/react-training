import React from "react";

const Meme = ({ topLine, bottomLine }) => {
  return (
    <div>
      <h1 id="top-line-text">{topLine}</h1>
      <h1 id="bottom-line-text">{bottomLine}</h1>
    </div>
  );
};

export default Meme;
