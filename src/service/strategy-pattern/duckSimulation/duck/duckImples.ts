import Duck from "../duck/interface/duck";
import type { flyBehavior } from "../duck/interface/flyable";

export class Redhatduck extends Duck {
  type: string = "animal";
  constructor(nm: string, fb: flyBehavior) {
    super(nm, fb);
  }

  display(): void {
    console.log("name: ", this.name, "\n", "type: ", this.type);
  }
}

export class RubberDuck extends Duck {
  type: string = "artifact";
  constructor(nm: string, fb: flyBehavior) {
    super(nm, fb);
  }

  display(): void {
    console.log("name: ", this.name, "\n", "type: ", this.type);
  }
}

export class WoodDuck extends Duck {
  type: string = "artifact";
  constructor(nm: string, fb: flyBehavior) {
    super(nm, fb);
  }

  display(): void {
    console.log("name: ", this.name, "\n", "type: ", this.type);
  }
}
