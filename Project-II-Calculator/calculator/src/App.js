import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="calculator-wrap">
      <div className="calculator-top">
        <CalculatorDisplay dsiplayStyle="display" text="0" />
      </div>
      <div className="left">
        <ActionButton operators="clear" text="clear" />
        <div className="numpad">
          <div className="firstRow">
            <NumberButton buttonStyle="number" text="7" />
            <NumberButton buttonStyle="number" text="8" />
            <NumberButton buttonStyle="number" text="9" />
          </div>
          <div className="secondRow">
            <NumberButton buttonStyle="number" text="4" />
            <NumberButton buttonStyle="number" text="5" />
            <NumberButton buttonStyle="number" text="6" />
          </div>
          <div className="thirdRow">
            <NumberButton buttonStyle="number" text="1" />
            <NumberButton buttonStyle="number" text="2" />
            <NumberButton buttonStyle="number" text="3" />
          </div>
          <div className="zero">
            <NumberButton buttonStyle="number" text="0" />
          </div>
          <div className="operators">
            <ActionButton operators="number" text="÷" />
            <ActionButton operators="number" text="x" />
            <ActionButton operators="number" text="-" />
            <ActionButton operators="number" text="+" />
            <ActionButton operators="number" text="=" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
