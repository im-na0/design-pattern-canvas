
// NOTE: 추상 클래스
// 추상 클래스는 인스턴스를 만들 수 없는 클래스이다.
// 추상 클래스는 상속을 통해 자식 클래스에서 구현되어야 하는 메서드를 정의할 수 있다.

// 추상 클래스 VS 인터페이스
// 추상 클래스는 인스턴스 생성 O(가능), 인터페이스는 인스턴스 생성 X(불가능)
abstract class Grimpan {
    protected constructor(canvas: HTMLElement | null) {
      if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
        throw new Error("canvas 엘리먼트를 입력하세요");
      }
    }


  abstract initialize(): void
  abstract initializeMenu(): void

  static getInstance() {}
}

export default Grimpan;