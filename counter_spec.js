var should = require('should');
var Accumulator = require('./counter').Accumulator;
var Counter = require('./counter').Counter;


describe("interacction between counter and accumlator", function() {
    var counter;
    var accumulator;

    beforeEach(function(){
        counter = new Counter;
        accumulator = new Accumulator;
    });

    it("the count should be cero when accumulator is initialized", function() {
        console.log(counter)
        console.log(accumulator)
        accumulator.count.should.equal(0)
    });

    it("the count should be cero when counter is initialized", function() {
        counter.count.should.equal(0)
    });

    // it("accumulator receives a message from the counter", function() {
    //     accumulator.count.should.equal(0)
    // });
})