import type { observer } from "./interface/observer";
import type { view } from "./interface/view";
import type { WeatherStation } from "./WeatherStation";

// 현재 날씨 화면
export class CurrentView implements observer, view {
  private temp: number | null = null;
  private humid: number | null = null;

  weatherStation: WeatherStation | null = null;

  constructor(wthrsttn: WeatherStation) {
    this.weatherStation = wthrsttn;
    wthrsttn.registerObserver(this);
  }

  display() {
    if (typeof this.temp !== "number" || typeof this.humid !== "number") {
      console.error("기상 데이터를 찾지 못함");
      return;
    }

    console.log(`현재 날씨 - 기온: ${this.temp}, 습도: ${this.humid}`);
  }

  update() {
    if (!this.weatherStation) return;

    const temp = this.weatherStation.getTemperature();
    const humid = this.weatherStation.getHumidity();

    if (typeof temp !== "number" || typeof humid !== "number") {
      console.error("기상 데이터를 찾지 못함");
      return;
    }

    this.temp = temp;
    this.humid = humid;
    this.display();
  }
}

// 과거 날씨 기록 화면
export class WeatherLogView implements observer, view {
  private weatherLogs: { date: string; temp: number; humid: number }[] = [];
  weatherStation: WeatherStation | null = null;

  constructor(wthrsttn: WeatherStation) {
    this.weatherStation = wthrsttn;
    wthrsttn.registerObserver(this);
  }

  display() {
    console.log("과거 날씨 내역:");
    this.weatherLogs.forEach((log, index) => {
      console.log(
        `${index + 1} - 시간: ${log.date}, 기온: ${log.temp}, 습도 : ${
          log.humid
        }`
      );
    });
  }

  update() {
    if (!this.weatherStation) return;

    const temp = this.weatherStation.getTemperature();
    const humid = this.weatherStation.getHumidity();

    if (typeof temp !== "number" || typeof humid !== "number") {
      console.error("기상 데이터를 찾지 못함");
      return;
    }

    this.weatherLogs.push({ date: new Date().toLocaleString(), temp, humid });
    this.display();
  }
}
