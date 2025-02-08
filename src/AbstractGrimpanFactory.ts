import Grimpan from './AbstractGrimpan';

abstract class AbstractGrimpanFactory {
    abstract createGrimpan(): Grimpan;
}

export default AbstractGrimpanFactory;