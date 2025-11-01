import { useRef } from "react";
import DuckSimulation from "./service/duckSimulation/duckSimulation";

function App() {
  const duckSimulation = useRef(new DuckSimulation());

  return (
    <>
      <div>hello world</div>
    </>
  );
}

export default App;
