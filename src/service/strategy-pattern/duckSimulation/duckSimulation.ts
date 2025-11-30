

// import Duck from "../duck/interface/duck";
import { Redhatduck, RubberDuck, WoodDuck } from "./duck/duckImples";
import { FlyNotDoing, FlyithWings } from "./duck/interface/flyable";

export default class DuckSimulation {
  constructor() {
    console.log("DuckSimulation initialized");

    // const duck = new Duck();
    const rubberDuck = new RubberDuck("charlie", new FlyNotDoing());
    rubberDuck.display();
    rubberDuck.fly();

    const redhatDuck = new Redhatduck("nico", new FlyithWings());
    redhatDuck.display();
    redhatDuck.fly();

    const woodenDuck = new WoodDuck("kenny", new FlyNotDoing());
    woodenDuck.display();
    woodenDuck.fly();
  }
}
