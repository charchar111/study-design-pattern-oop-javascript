// 음료수의 추상 클래스
// 가격, 설명
export default abstract class Beverage {
  abstract description: string;

  constructor() {}

  //   추상 메서드
  abstract cost(): number;

  getDescription(): string {
    return this.description;
  }
}
