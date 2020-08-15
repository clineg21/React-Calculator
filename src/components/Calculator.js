import React, { useState } from "react";
import Keypad from "./Keypad";
import * as math from "mathjs";

function Calculator() {
  const [result, setResult] = useState("");

  const handleNumClick = (e) => {
    let key = e.target.value;
    if (key === "C") {
      setResult("");
    } else {
      setResult(result + key);
    }
  };

  const handleEquals = () => {
    setResult(math.evaluate(result));
  };

  return (
    <div className="calc">
      <span className="result">{result}</span>
      <Keypad handleNumClick={handleNumClick} handleEquals={handleEquals} />
    </div>
  );
}

export default Calculator;
