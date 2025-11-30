import { useEffect } from "react";
// import DuckSimulation from "./service/strategy-pattern/duckSimulation/duckSimulation";
// import StarbuzzSimulation from "./service/decorator-pattern/starbuzzSimulation/starbuzzSimulation";
import WeatherStationSimulation from "./service/observer-pattern/weatherStationSimulation/weatherStationSimulation";

function App() {
  useEffect(() => {
    // new DuckSimulation();
    // new StarbuzzSimulation();
    new WeatherStationSimulation();
  }, []);

  return (
    <>
      <div>hello world</div>
    </>
  );
}

export default App;
