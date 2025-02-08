import ChromeGrimpan from "./ChromeGrimpan";
import { AbstractGrimpanFactory, ChromeGrimpanFactory } from "./GrimpanFactory";

// main 함수는 팩토리 인터페이스(AbstractGrimpanFactory)만 의존함.
// -> 제품이 변경되어도 main은 수정할 필요 없음
function main(factory: AbstractGrimpanFactory) {
  const grimpan = factory.createGrimpan();
  const grimpanMenu = factory.createGrimpanMenu(grimpan);
  const grimpanHistory = factory.createGrimpanHistory(grimpan);
  grimpan.initialize();
  grimpanMenu.initialize();
  grimpanHistory.initialize();
}

main(new ChromeGrimpanFactory());
