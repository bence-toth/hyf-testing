import { useState } from "react";

const addTwoNumbers = (numberOne, numberTwo) => {
  return numberOne + numberOne;
}

const App = () => {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const sum = addTwoNumbers(numberOne, numberTwo);
  return (
    <div className="App">
      <h1>Calculator</h1>
      <h2>Add two numbers here</h2>
      <h3>This a simple calculator</h3>
      <input
        data-testid="number1"
        type="number"
        value={numberOne}
        onChange={(e) => {
          setNumberOne(+e.target.value);
        }}
      />
      +
      <input
        data-testid="number2"
        type="number"
        value={numberTwo}
        onChange={(e) => {
          setNumberTwo(+e.target.value);
        }}
      />
      =
      <span data-testid="sum">{sum}</span>
    </div>
  );
};

export default App;

export {addTwoNumbers};
