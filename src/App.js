import { useState } from "react";

const App = () => {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const sum = numberOne + numberTwo;
  return (
    <div className="App">
      <input
        type="number"
        value={numberOne}
        onChange={(e) => {
          setNumberOne(e.target.value);
        }}
      />
      +
      <input
        type="number"
        value={numberTwo}
        onChange={(e) => {
          setNumberTwo(e.target.value);
        }}
      />
      ={sum}
    </div>
  );
};

export default App;
