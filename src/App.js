import "./styles.css";

import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <span>
        <button onClick={() => setCount(count + step)}>Increment</button>
        Count: {count}
        <button onClick={() => setCount(count - step)}>Decrement</button>
      </span>
      <br />
      <span>
        <button onClick={() => setStep(step + 1)}>Step Up</button>{" "}
        <span>Step: {step}</span>
        <button onClick={() => setStep(step - 1)}>Step Down</button>
      </span>
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
