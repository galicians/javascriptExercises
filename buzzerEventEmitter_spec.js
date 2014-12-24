var should = require("should");
var Buzzer = require('./buzzerEventEmitter');


describe('the buzzer object', function() {
    var buzzer;
    var called;

    beforeEach(function(){
        buzzer = new Buzzer();
        called = false;
    });

    it("emits a 'buzz' when pressed", function(){
        buzzer.on('buzz', function() { called = true } );
        buzzer.press()
        called.should.equal(true)
    });
});