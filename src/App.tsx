import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minus = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}

export default App;
