var should = require('should');
var Announcer = require('./announcer')

describe('announcer', function(){
    var announcer;
    var message;
    
    beforeEach(function(){   
        announcer = new Announcer('starting');
        message = null;
    });

    it("broadcasts an announcement", function(){
        announcer.on('message', function(m) {
            message = m
        });
        
        announcer.announce('unit testing for announcer')
        message.should.equal('starting, unit testing for announcer');
    });
});