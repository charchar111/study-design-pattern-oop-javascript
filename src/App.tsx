import { useEffect, useRef, useState } from "react";
import DuckSimulation from "./service/strategy-pattern/duckSimulation/duckSimulation";

function App() {
  const duckSimulation = useRef<DuckSimulation>(null);

  useEffect(() => {
    duckSimulation.current = new DuckSimulation();
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        hello world
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>click</button>
      </div>
    </>
  );
}

export default App;
