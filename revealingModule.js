Create the same object using the revealing Module:

MyModule : {
    id : 1, 
    getId: function() {
        return MyModule.id;
    }
}