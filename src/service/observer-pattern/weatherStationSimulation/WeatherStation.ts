import type { observer, subject } from "./interface/observer";

export class WeatherStation implements subject {
  private observers: observer[] = [];

  temperature: number | null = null;
  humidity: number | null = null;

  registerObserver(observer: observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: observer): void {
    this.observers.filter((obsrvr) => obsrvr! == observer);
  }

  notifyObserver(): void {
    this.observers.forEach((el) => {
      el.update();
    });
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  setMeasurement(temp: number, humid: number) {
    this.temperature = temp;
    this.humidity = humid;

    this.notifyObserver();
  }
}
