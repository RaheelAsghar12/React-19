import React, { useState } from "react";
import "./App.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      // eval() used for simplicity; in real apps use a math parser
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />

      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+","=","C"].map((btn) => (
          <button
            key={btn}
            onClick={() =>
              btn === "=" ? handleCalculate() :
              btn === "C" ? handleClear() :
              handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
