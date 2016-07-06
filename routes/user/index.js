var router = require('express').Router();
var userImpl = require('../../persistence/users.implementation');
var serverConstants = require('../../constants/application');

router.get('/me', function (req, res) {
    res.send('getting me');
});

router.get('/users', function (req, res) {
    userImpl.getUsers().then(function(users) {
        res.json({status:200, message: users});
    }, function (error) {
        res.status(error.status).send(error);
    });
});

router.post('/register', function (req, res) {
    userImpl.createUser(req.body).then(function (user) {
        res.json({status: 200, message: user});
    }, function (error) {
        res.status(error.status).send(error);
    });
});

router.route('/user/:userId')
    .get(function (req, res) {
        userImpl.getUser(req.params.userId).then(function(user) {
            res.json({status:200, message: user});
        }, function (error) {
            res.status(error.status).send(error);
        });
    })
    .put(function (req, res) {
        userImpl.modifyUser(req.params.userId, req.body).then(function () {
            res.json(serverConstants.CODE['200']);
        }, function (error) {
            res.status(error.status).send(error);
        });
    })
    .delete(function (req, res) {
        userImpl.removeUser(req.params.userId).then(function () {
            res.json(serverConstants.CODE['200']);
        }, function (error) {
            res.status(error.status).send(error);
        });
    });


module.exports = router;