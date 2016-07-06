var User = require('../schemas/userSchema');
var Deferred = require('promised-io').Deferred;
var serverConstants = require('../constants/application');

var _createUser = function (_user) {
    var deferred = new Deferred();
    
    var user = new User({
        username: _user.username,
        password: _user.password
    });

    user.save(function (error) {
        if (error) {
            deferred.reject(serverConstants['500']);
        }
        deferred.resolve()
    });
    
    return deferred.promise;
};

module.exports = {
    createUser: _createUser
};

