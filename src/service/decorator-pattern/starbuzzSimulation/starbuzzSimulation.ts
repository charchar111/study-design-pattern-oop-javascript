import { Darkroast, Houseblend } from "./beverage/beverageImpl";
import { Milk, Mocha, Whip } from "./decorator/beverageAdditiveImpl";

export default class StarbuzzSimulation {
  constructor() {
    // 하우스블렌드

    const bvrg1 = new Houseblend();
    console.log(bvrg1.getDescription(), "cost: ", bvrg1.cost());

    // 모카 + 휘핑 + 우유 + 다크로스트

    const bvrg2 = new Mocha(new Whip(new Milk(new Darkroast())));
    console.log(bvrg2.getDescription(), "cost: ", bvrg2.cost());
  }
}
