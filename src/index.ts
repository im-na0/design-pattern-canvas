import ChromeGrimpan from "./ChromeGrimpan.js";
import Grimpan from "./ChromeGrimpan.js";
import { ChromeGrimpanFactory } from "./GrimpanFactory.js";
import IEGrimpan from "./IEGrimpan.js";

function main() {
    const grimpan = new ChromeGrimpanFactory().createGrimpan();
    grimpan.initialize();
    grimpan.initializeMenu();
}

main();