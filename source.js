
// Let’screateaclasscalledSource,based on the ‘streams2’ Readableclass.TheReadableclass works by invoking a method called _read() when a consumer 
// wants to read data, either via the stream.pipe() or stream.read() method or the stream.on("data") listener. 
// The subclass’s _read() method must use push() to queue up the output it wants to emit, which Readable will either immediately hand off 
// to the consumer or buffer in memory if the consumer is not ready for it yet.
// The Source class take a list of chunks and a time interval, and emits the chunks at times separated by that interval.


var stream = require('stream');
var util = require("util");

var Source = function(chunks, interval) {
    stream.Readable.call(this);
    this.chunks = chunks;
    this.index = 0;
    this.interval = interval;
};

util.inherits(Source, stream.Readable)

Source.prototype.read = function() {
    var self = this;
    setTimeout(function() {
        if (self.index === self.chunks.length) {
            self.push(null)
        } else {
            self.push(self.chunks[self.index])
            self.index += 1
        }
    }, this.interval)
}

module.exports = Source;