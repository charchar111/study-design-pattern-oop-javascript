// 외부에서 의존하기 위한 인터페이스
// 구체적인 구현체가 아닌 인터페이스에 의존하도록 설계
export interface flyBehavior {
  fly(): void;
}

// 날개로 남
// 동물 구현체 전용
export class FlyithWings implements flyBehavior {
  fly(): void {
    console.log("Flying with wings!");
  }
}

// 못남
// 고무오리, 나무오리 구현체 전용
export class FlyNotDoing implements flyBehavior {
  fly(): void {
    console.log("I can't fly.");
  }
}
