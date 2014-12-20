//MyModule.js
exports.id = 1;
exports.getId = function() {
    return this.id;
}

//app.js
var MyModule = require("../lib/MyModule");
MyModule.getId()