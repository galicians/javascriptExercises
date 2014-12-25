

var Listenable = function(object) {
    this.object = object;
    this.listeners = [];
};

Listenable.prototype.listen = function(listener) {
    this.listeners.push(listener);
};

Listenable.prototype.emit = function() {
    for (var i = 0, n = listeners.length; i < n; i++) {
        this.listeners[i].apply(this.object, arguments);
    }
};


// We pass in an object in the constructor because we still want to be able to invoke the listeners with this bound to the object that’s emitting the event.