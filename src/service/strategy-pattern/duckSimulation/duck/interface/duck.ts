import type { flyBehavior } from "./flyable";

export default abstract class Duck {
  name: string;

  //  변동 가능한 유연한 부분은 외부에서 주입하도록 설계
  flyBehavior: flyBehavior;
  abstract type: string;

  constructor(nm: string, fb: flyBehavior) {
    this.name = nm;
    this.flyBehavior = fb;
  }

  abstract display(): void;

  fly(): void {
    this.flyBehavior.fly();
  }
}
