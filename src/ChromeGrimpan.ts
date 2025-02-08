import Grimpan from "./AbstractGrimpan";

// NOTE: 추상 클래스의 구현체
// 추상 클래스의 구현체는 추상 클래스를 상속받아 추상 메서드를 구현한다.
class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan;

  initialize() {}
  initializeMenu() {}

  static  override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("canvas"));
    }

    return this.instance;
  }
}

export default ChromeGrimpan;
