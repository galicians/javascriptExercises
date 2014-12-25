var should = require('should');
var Announcer = require('./announcer')

describe('announcer', function(){
    var announcer;
    var message;
    
    beforeEach(function(){   
        announcer = new Announcer('Attention developerts');
        message = null;
    });

    it("broadcasts an announcement", function(){
        announcer.on('message', function(m) {
            message = m
        });
        
        announcer.announce('unit testing for announcer')
        message.should.equal('Attention developerts, unit testing for announcer');
    });
});