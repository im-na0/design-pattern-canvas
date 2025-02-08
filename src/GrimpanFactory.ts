import Grimpan from "./AbstractGrimpan";
import AbstractGrimpanFactory from "./AbstractGrimpanFactory";
import ChromeGrimpan from "./ChromeGrimpan";
import IEGrimpan from "./IEGrimpan";

// NOTE: 팩토리 메서드
// 상위 클래스가 인터페이스 역할, 하위 클래스에서 구체적인 구현을 담당한다.
class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    override createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
}

class IEGrimpanFactory extends AbstractGrimpanFactory {
    override createGrimpan() {
        return IEGrimpan.getInstance();
    }
}

// NOTE: 이런식으로 다른 브라우저의 구현체를 추가할 수 있다.
// 하위 클래스를 다양하게 만들어 OCP, SRP 충족
// 상속을 통해서도 다른 객체를 생성할 수 있음
// class SafariGrimpanFactory extends AbstractGrimpanFactory {
//     override createGrimpan(): Grimpan {
//         return SafariGrimpan.getInstance();
//     }
// }


export { ChromeGrimpanFactory, IEGrimpanFactory };
