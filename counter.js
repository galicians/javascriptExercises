var util = require('util');
var events = require('events');

var Counter = function() {
    this.count = 0;
    events.EventEmitter.call(this);
};

util.inherits(Counter, events.EventEmitter);

Counter.prototype.increase = function() {
    this.emit('increase')
};

var Accumulator = function() {
    this.count = 0;
    events.EventEmitter.call(this);
};

Accumulator.prototype.counting = function(){
    this.on('increase', function(){
        this.count += 1
    });
};

exports.Counter = Counter;
exports.Accumulator = Accumulator;