import Grimpan from "./AbstractGrimpan";

// 크롬 그림판의 구체적인 구현
class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan;

  initialize() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("canvas"));
    }

    return this.instance;
  }
}

export default ChromeGrimpan;
