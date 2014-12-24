var events = require("events");
var util = require("util");


var Announcer = function(prelude){
    this.prelude = prelude;
    events.EventEmitter.call(this);
};

util.inherits(Announcer, events.EventEmitter);

Announcer.prototype.announce = function(message) {
    message = this.prelude + ", " + message
    this.emit("message", message);
};


module.exports = Announcer;