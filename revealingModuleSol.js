var MyModule = function(){

    var id = 1;
    var getId = function(){
        return id;
    };

    //public api is explicit
    return : {
        findId : getId
    }
}();

//notice the self-invoking at the end