import Beverage from "../../beverage/interface/beverage";

export default abstract class BeverageAdditive extends Beverage {
  beverage: Beverage;

  constructor(bvrg: Beverage) {
    super();
    this.beverage = bvrg;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", " + this.description;
  }
}
