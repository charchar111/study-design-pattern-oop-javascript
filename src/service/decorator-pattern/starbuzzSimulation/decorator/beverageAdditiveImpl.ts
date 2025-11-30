import BeverageAdditive from "./interface/beverageAdditive ";

export class Milk extends BeverageAdditive {
  description = "우유";
  cost() {
    return this.beverage.cost() + 0.5;
  }
}

export class SoyMilk extends BeverageAdditive {
  description = "두유";
  cost(): number {
    return this.beverage.cost() + 0.6;
  }
}

export class Mocha extends BeverageAdditive {
  description = "모카";
  cost(): number {
    return this.beverage.cost() + 0.7;
  }
}

export class Whip extends BeverageAdditive {
  description = "휘핑크림";
  cost(): number {
    return this.beverage.cost() + 0.4;
  }
}
