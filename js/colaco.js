function Cola() {
    this._ultdt = 1;
    this._nvdt = 1;
    this._storage = {};
}

Cola.prototype.enqueue = function(elemento) {
    this._storage[this._nvdt] = elemento;
    this._nvdt++;

    return elemento;
};
Cola.prototype.dequeue = function() {
    var _ultdt = this._ultdt,
        _nvdt = this._nvdt,
        deletedData;

    if (_ultdt !== _nvdt) { //que no se tenga el mismo valor en las variables
        deletedData = this._storage[_ultdt]
        delete this._storage[_ultdt];
        this._ultdt++;

        return deletedData;
    }
    return deletedData;
};
Cola.prototype.peek = function() {
    return this._ultdt;
}
Cola.prototype.size = function() {
    return this._nvdt - this._ultdt;
};
Cola.prototype.print = function() {
    return this._storage;
}
let fila = new Cola();