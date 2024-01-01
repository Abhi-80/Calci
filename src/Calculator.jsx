import React, { useState } from 'react';
import './Calculator.css'; // Import the styles if needed

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState('');

  const appendInput = (input) => {
    setCurrentInput((prevInput) => prevInput + input);
  };

  const clearResult = () => {
    setCurrentInput('');
  };

  const deleteLast = () => {
    setCurrentInput((prevInput) => prevInput.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setCurrentInput(eval(currentInput).toString());
    } catch (error) {
      setCurrentInput('Error');
    }
  };

  return (
    <div className="calculator">
      <input value={currentInput} type="text" id="inputBox" placeholder="0" readOnly />
      <div>
        <button className="operator" onClick={() => clearResult()}>AC</button>
        <button className="operator" onClick={() => deleteLast()}>DEL</button>
        <button className="operator" onClick={() => appendInput('%')}>%</button>
        <button className="operator" onClick={() => appendInput('/')}>/</button>
      </div>
      <div>
        <button onClick={() => appendInput('7')}>7</button>
        <button onClick={() => appendInput('8')}>8</button>
        <button onClick={() => appendInput('9')}>9</button>
        <button className="operator" onClick={() => appendInput('*')}>*</button>
      </div>
      <div>
        <button onClick={() => appendInput('4')}>4</button>
        <button onClick={() => appendInput('5')}>5</button>
        <button onClick={() => appendInput('6')}>6</button>
        <button className="operator" onClick={() => appendInput('+')}>+</button>
      </div> <div>
        <button onClick={() => appendInput('1')}>1</button>
        <button onClick={() => appendInput('2')}>2</button>
        <button onClick={() => appendInput('3')}>3</button>
        <button className="operator" onClick={() => appendInput('-')}>-</button>
      </div>
      <div>
        {/* Similar onClick handlers for the remaining number buttons */}
      </div>
      <div>
        <button onClick={() => appendInput('00')}>00</button>
        <button onClick={() => appendInput('0')}>0</button>
        <button onClick={() => appendInput('.')}>.</button>
        <button className="equalBtn" onClick={() => calculateResult()}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
