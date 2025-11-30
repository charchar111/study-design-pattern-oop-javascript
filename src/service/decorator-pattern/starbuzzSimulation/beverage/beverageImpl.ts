import Beverage from "./interface/beverage";

export class Houseblend extends Beverage {
  constructor() {
    super();
  }
  description = "스타버즈 하우스블렌드";
  cost() {
    return 2.8;
  }
}

export class Darkroast extends Beverage {
  constructor() {
    super();
  }
  description = "다크로스트";
  cost() {
    return 3.2;
  }
}

export class Decaf extends Beverage {
  description = "디카페인";
  cost() {
    return 3.5;
  }
}

export class Espresso extends Beverage {
  description = "에스프레소";
  cost() {
    return 3.0;
  }
}
