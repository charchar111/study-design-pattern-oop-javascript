import { CurrentView, WeatherLogView } from "./viewImpl";
import { WeatherStation } from "./WeatherStation";

export default class WeatherStationSimulation {
  constructor() {
    console.log("WeatherStationSimulation");
    const weatherStation = new WeatherStation();

    new CurrentView(weatherStation);

    new WeatherLogView(weatherStation);
    weatherStation.setMeasurement(15, 20);
    weatherStation.setMeasurement(12, 20);
    weatherStation.setMeasurement(10, 20);
  }
}
