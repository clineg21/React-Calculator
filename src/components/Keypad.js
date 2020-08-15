import React from "react";

function Keypad({ handleNumClick, handleEquals }) {
  const renderButton = (i) => {
    return (
      <button value={i} onClick={handleNumClick} className="key">
        {i}
      </button>
    );
  };

  const renderEqualsBtn = (i) => {
    return (
      <button value={i} onClick={handleEquals} className="equals">
        {i}
      </button>
    );
  };

  return (
    <div className="keypad">
      <div className="keypad-row">
        {renderButton("0")}
        {renderButton("1")}
        {renderButton("2")}
      </div>
      <div className="keypad-row">
        {renderButton("3")}
        {renderButton("4")}
        {renderButton("5")}
      </div>
      <div className="keypad-row">
        {renderButton("6")}
        {renderButton("7")}
        {renderButton("8")}
      </div>
      <div className="keypad-row">
        {renderButton("9")}
        {renderButton("+")}
        {renderButton("-")}
      </div>
      <div className="keypad-row">
        {renderEqualsBtn("=")}
        {renderButton("C")}
      </div>
    </div>
  );
}
export default Keypad;
