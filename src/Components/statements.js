import React, { useState, useRef } from "react";
import "./App.css";
import TextField from "./textfield";
import Button from "./button";

const CalculationContext = React.createContext();

function Sum(props) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleSum = () => {
    props.onResult("sum", parseInt(num1) + parseInt(num2));
  };

  return (
    <>
      <div>
        <h2>Enter two numbers:</h2>
      </div>

      <div>
        <TextField value={num1} onChange={(e) => setNum1(e.target.value)} /> +{" "}
        <TextField value={num2} onChange={(e) => setNum2(e.target.value)} />{" "}
        <Button onClick={handleSum}>Calculate</Button>
      </div>
    </>
  );
}

function Subtract(props) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleSubtract = () => {
    props.onResult("sub", parseInt(num1) - parseInt(num2));
  };

  return (
    <>
      <div>
        <h2>Enter two numbers:</h2>
      </div>

      <div>
        <TextField value={num1} onChange={(e) => setNum1(e.target.value)} /> -{" "}
        <TextField value={num2} onChange={(e) => setNum2(e.target.value)} />{" "}
        <Button onClick={handleSubtract}>Calculate</Button>
      </div>
    </>
  );
}

function Divide(props) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handleDivide = () => {
    props.onResult("div", parseInt(num1) / parseInt(num2));
  };

  return (
    <>
      <div>
        <h2>Enter two numbers:</h2>
      </div>

      <div>
        <TextField value={num1} onChange={(e) => setNum1(e.target.value)} /> /{" "}
        <TextField value={num2} onChange={(e) => setNum2(e.target.value)} />{" "}
        <Button onClick={handleDivide}>Calculate</Button>
      </div>
    </>
  );
}

function Statements() {
  const inputRef = useRef(null);
  const [sumResult, setSumResult] = useState("");
  const [subResult, setSubResult] = useState("");
  const [divResult, setDivResult] = useState("");

  const handleResult = (operation, result) => {
    switch (operation) {
      case "sum":
        setSumResult(result);
        break;
      case "sub":
        setSubResult(result);
        break;
      case "div":
        setDivResult(result);
        break;
      default:
        break;
    }
  };

  return (
    <CalculationContext.Provider value={inputRef}>
      <div>
        <h3>The sum is {sumResult}</h3>
        <h3>The sub is {subResult}</h3>
        <h3>The division is {divResult}</h3>
      </div>

      <div>
        <Sum onResult={handleResult} />
        <Subtract onResult={handleResult} />
        <Divide onResult={handleResult} />
      </div>
    </CalculationContext.Provider>
  );
}

export default Statements;
