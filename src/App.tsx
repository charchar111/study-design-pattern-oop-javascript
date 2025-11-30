import { useEffect, useRef, useState } from "react";
import DuckSimulation from "./service/strategy-pattern/duckSimulation/duckSimulation";
import StarbuzzSimulation from "./service/decorator-pattern/starbuzzSimulation/starbuzzSimulation";

function App() {
  const duckSimulation = useRef<DuckSimulation>(null);
  const starbuzzSimulation = useRef<StarbuzzSimulation>(null);

  useEffect(() => {
    duckSimulation.current = new DuckSimulation();
    // starbuzzSimulation.current = new StarbuzzSimulation();
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
