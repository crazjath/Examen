class Pila {
    constructor() {
        this.pila = [];
    }



    push(elemento) {
        this.pila.push(elemento);
        return this.pila;
    }

    pop() {
        return this.pila.pop();
    }

    peek() {
        return this.pila[this.pila.length - 1]
    }


    size() {
        return this.pila.length;
    }

    print() {
        console.log(this.pila);
    }
}

const pila = new Pila();