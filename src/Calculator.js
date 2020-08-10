import React, { useState } from "react";
import "./Calculator.css";
import Button from "./components/Button";

function Calculator() {
  const [output, setOutput] = useState("0");

  function handleClick(label) {
    if (output === "0") {
      setOutput("");
    }
    if (label === "=") {
      setOutput(eval(output.replace(/x/g, "*")));
    } else {
      setOutput((prevState) => prevState + label);
    }
    // create a calculation function that will be performed when equals is pressed.
  }

  return (
    <div className="calculator">
      <div id="display">{output}</div>
      <div className="buttonContainer">
        <Button id="clear" label="C" onClick={() => setOutput("0")} />
        <Button id="divide" label="/" onClick={handleClick} />
        <Button id="multiply" label="x" onClick={handleClick} />
        <Button id="seven" label="7" onClick={handleClick} />
        <Button id="eight" label="8" onClick={handleClick} />
        <Button id="nine" label="9" onClick={handleClick} />
        <Button id="subtract" label="-" onClick={handleClick} />
        <Button id="four" label="4" onClick={handleClick} />
        <Button id="five" label="5" onClick={handleClick} />
        <Button id="six" label="6" onClick={handleClick} />
        <Button id="add" label="+" onClick={handleClick} />
        <Button id="one" label="1" onClick={handleClick} />
        <Button id="two" label="2" onClick={handleClick} />
        <Button id="three" label="3" onClick={handleClick} />
        <Button id="equals" label="=" onClick={handleClick} />
        <Button id="zero" label="0" onClick={handleClick} />
        <Button id="decimal" label="." onClick={handleClick} />
      </div>
      <p className="footer">
        designed and coded by <strong>Maria Gusova</strong>
      </p>
    </div>
  );
}

export default Calculator;
