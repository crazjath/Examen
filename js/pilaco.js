function Pila() {
    this._size = 0;
    this._storage = [];

}

Pila.prototype.push = function(elemento) {
    var size = this._size++;

    this._storage[size] = elemento;
    return this.elemento,
        this._storage[size];
}

Pila.prototype.pop = function() {
    var size = this._size, //tamaño de la pila
        deletedData;

    if (size) { //no se llega numeros negativos por la ejecucion si llega a haber datos
        deletedData = this._storage[this._size - 1];

        delete this._storage[this._size - 1];
        this._size--; //disminuir el tamaño

        return deletedData;
    }
    return deletedData;

}
Pila.prototype.peek = function() {
    let a = this._storage[this._size - 1]
    return a
}

Pila.prototype.size = function() {
    return this._size;
}
Pila.prototype.print = function() {
    return this._storage;
}

let obj_Pila = new Pila();