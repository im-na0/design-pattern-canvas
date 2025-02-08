import Grimpan from "./AbstractGrimpan";
import ChromeGrimpan from "./ChromeGrimpan";
import {
  ChromeGrimpanHistory,
  GrimpanHistory,
  IEGrimpanHistory,
} from "./GrimpanHistory";
import { ChromeGrimpanMenu, GrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu";
import IEGrimpan from "./IEGrimpan";

// NOTE: 추상 팩토리
// 관련된 객체들을 그룹화하여 일관성 있게 생성할 수 있도록 하는 패턴
// 서로 관련된 객체들을 생성하는 (팩토리)인터페이스 제공, 구체적인 클래스를 지정하지 않음
// 즉, 팩토리를 통해 인스턴스를 생성하면, 클라이언트(main 함수)는 구체적인 클래스(Concrete Class)를 알 필요가 없음.
abstract class AbstractGrimpanFactory {
  // NOTE: abstract는 static 메서드 구현 불가!!!
  // static createGrimpan() {
  //     throw new Error('하위 클래스에서 구현하셔야 합니다.');
  //   };
  //   static createGrimpanMenu(grimpan: Grimpan) {
  //     throw new Error('하위 클래스에서 구현하셔야 합니다.');
  //   };
  //   static createGrimpanHistory(grimpan: Grimpan) {
  //     throw new Error('하위 클래스에서 구현하셔야 합니다.');
  //   };

  // static 제거 → 인스턴스 메서드로 변경 (abstract 사용 가능해짐)
  abstract createGrimpan(): Grimpan;
  abstract createGrimpanMenu(grimpan: Grimpan): GrimpanMenu;
  abstract createGrimpanHistory(grimpan: Grimpan): GrimpanHistory;
}

// NOTE: 구체 팩토리
class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  createGrimpan() {
    return ChromeGrimpan.getInstance();
  }

  createGrimpanMenu(grimpan: ChromeGrimpan) {
    return ChromeGrimpanMenu.getInstance(grimpan);
  }
  createGrimpanHistory(grimpan: ChromeGrimpan) {
    return ChromeGrimpanHistory.getInstance(grimpan);
  }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
  createGrimpan() {
    return IEGrimpan.getInstance();
  }

  createGrimpanMenu(grimpan: IEGrimpan) {
    return IEGrimpanMenu.getInstance(grimpan);
  }
  createGrimpanHistory(grimpan: ChromeGrimpan) {
    return IEGrimpanHistory.getInstance(grimpan);
  }
}

export { AbstractGrimpanFactory, ChromeGrimpanFactory, IEGrimpanFactory };
