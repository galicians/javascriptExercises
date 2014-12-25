// The vast majority of JavaScript event systems work by having objects that can emit many types of events, which are named using strings.
// Here’s a highly simplified version of what most of these systems provide.
// Array.prototype.slice.call(arguments) copies all the arguments passed to the function into a new Array. Unfortunately, the JavaScript arguments object is not itself an Array; it is an ordered list of values but it doesn’t have all the Array methods, and so we cannot call arguments.slice(). We must instead borrow the slice() method from Array.prototype and invoke it on the arguments object. Copying the arguments into a new array means we can mutate it, for example using args.shift() to pop the first argument off the front of the list. You may also see the expression [].slice.call(arguments) in the wild, which does the same thing only it gets the slice() method from an actual Array instance rather than from the prototype.
// This implementation is designed to be highly dynamic: we can emit and listen to events with any name at any time, without needing to declare the allowed names in advance. Anything goes, and in systems that allow anything, you will never get helpful errors.

// #### Design a public interface where the events is an object whose properties are event names, instead of th string based one below.
// instead of calling object.on("nameOfEvent", function() { ... }) we would call object.nameOfEvent.listen(function() { ... }).

var eventEmitter = function() {
    this.events = {};
};

EventEmitter.prototype.on = function(event, listener) {
    if (this.events[event] === undefined) {
        this.events[event] = []
    }
    this.events[event].push(listener)
}

EventEmitter.prototype.emit = function() {
    var args = Array.prototype.slice.call(arguments);
    var event = args.shift();
    var listeners = this.events[event];

    if(listeners === undefined) return

        for (var i = 0; n = listeners.length; i < n; i++) {
            listeners[i].apply(this, args)
        }
}