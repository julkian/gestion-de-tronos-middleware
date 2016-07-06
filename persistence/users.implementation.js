var User = require('../schemas/userSchema');
var Deferred = require('promised-io').Deferred;
var serverConstants = require('../constants/application');
var _ = require('underscore');
var mongoose = require('mongoose');

var _createUser = function (_user) {
    'use strict';
    var deferred = new Deferred();
    
    var user = new User({
        username: _user.username,
        password: _user.password
    });

    user.save(function (error) {
        if (error) {
            deferred.reject(serverConstants.CODE['500']);
        } else {
            deferred.resolve();
        }
    });
    
    return deferred.promise;
};

var _getUsers = function() {
    'use strict';
    var deferred = new Deferred();

    User.find({},function(error, users) {
        if(error) {
            deferred.reject(serverConstants.CODE['500']);
        } else {
            deferred.resolve(users);
        }
    });

    return deferred.promise;

};

var _modifyUser = function (userId, _user) {
    'use strict';
    var deferred = new Deferred();
    User.findById(userId, function (error, user) {
        if(error) {
            deferred.reject(serverConstants.CODE['500']);
        } else if(user === null) {
            deferred.reject(serverConstants.CODE['500']);
        } else  {
            var keyUser = Object.keys(_user),
                userUpdate = {$set:{}};
            _.each(keyUser, function (key) {
                if (key === 'gameId') {
                    userUpdate['$set'][key] = mongoose.Types.ObjectId(_user[key]);
                } else {
                    userUpdate['$set'][key] = _user[key];
                }
            });
            user.update(userUpdate, function (error, userUpdated) {
                if (error) {
                    deferred.reject(serverConstants.CODE['500']);
                } else {
                    deferred.resolve(userUpdated);
                }
            });
        }
    });
    return deferred.promise;
};

var _removeUser = function (userId) {
    'use strict';
    var deferred = new Deferred();
    User.findById(userId, function (error, user) {
        if(error) {
            deferred.reject(serverConstants.CODE['500']);
        } else if(user === null) {
            deferred.reject(serverConstants.CODE['500']);
        } else  {
            User.remove({_id: mongoose.Types.ObjectId(userId)}, function (error, idUserRemoved) {
                if (error) {
                    deferred.reject(serverConstants.CODE['500']);
                } else {
                    deferred.resolve(idUserRemoved);
                }
            });
        }
    });
    return deferred.promise;
};

module.exports = {
    createUser: _createUser,
    getUsers: _getUsers,
    modifyUser: _modifyUser,
    removeUser: _removeUser
};

