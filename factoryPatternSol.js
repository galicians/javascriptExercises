exports.createEmptyUser = function(args){

    var user = {};

    user.email = args.email;

    return user;
};