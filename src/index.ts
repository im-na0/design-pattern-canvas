import ChromeGrimpan from "./ChromeGrimpan.js";
import Grimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";

// NOTE: 심플 팩토리 패턴
// 심플 팩토리 패턴은 객체를 생성하는 패턴으로, 객체를 생성하는 코드를 클라이언트로부터 분리시킬 수 있다.
// 객체를 생성하는 코드를 별도의 클래스로 분리함으로써 객체의 생성 방식을 변경할 때 클라이언트의 코드를 수정하지 않아도 된다.
// But, 단일책임원칙을 위배한다. 객체 생성과 관련된 책임이 하나의 클래스에 몰려있다.
class GrimpanFactory {
    static create(type: string) {
        if (type === "ie") {
            return IEGrimpan.getInstance();
        } else if (type === "chrome") {
            return ChromeGrimpan.getInstance();
        } else if (type === "safari") {
            // 기능 추가 시 여기에 코드를 추가  
        } 
        else {
            throw new Error("지원하지 않는 브라우저입니다");
        }
    }
}

function main() {
    GrimpanFactory.create('ie');
    GrimpanFactory.create('chrome');
    GrimpanFactory.create('safari');
}

main();