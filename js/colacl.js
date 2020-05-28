class Cola {
    constructor() {
        this.cola = [];
    }

    enqueue(elemento) {
        this.cola.push(elemento);
        return this.cola
    }

    dequeue() {
        return this.cola.shift();
    }

    peek() {
        return this.cola[0];
    }

    size() {
        return this.cola.length;
    }

    isEmpty() {
        return this.cola.length === 0;
    }

    print() {
        return this.cola;
    }
}

let fila = new Cola;