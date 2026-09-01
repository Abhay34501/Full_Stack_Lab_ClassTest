import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="card">
      <h2>Counter</h2>

      <div className="count">{count}</div>

      <div className="buttons">
        <button onClick={increment}>Increment</button>

        <button onClick={decrement} disabled={count === 0}>
          Decrement
        </button>

        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
