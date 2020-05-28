/* lass Pila {
    constructor() {
        this.pila = [];
    }


    //Agrega un elemento al final de la pila
    push(elemento) {
            this.pila.push(elemento);
            return this.pila;
        }
        //Retorna el último valor ingresado a la pila y lo elimina de la pila
    pop() {
            return this.pila.pop();
        }
        //Retorna el último valor ingresado a la pila, sin sacarlo de ésta.
    peek() {
        return this.pila[this.pila.length - 1]
    }

    //Retorna la longitud de nuestro arreglo
    size() {
        return this.pila.length;
    }

    print() {
        console.log(this.pila);
    }
}

const pila = new Pila();
 */

class Pila {
    constructor() {
        this.pila = {};
        this.contador = 0;
    }

    push(elemento) {
        this.pila[this.contador] = elemento;
        this.contador++
    }
    pop() {
        let a = this.pila[this.contador - 1]
        delete this.pila[this.contador - 1]
        this.contador--
            return a
    }
}

let miPila = new Pila();