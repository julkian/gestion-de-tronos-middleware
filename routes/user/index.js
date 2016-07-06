var router = require('express').Router();
var userImpl = require('../../persistence/users.implementation');

router.get('/me', function (req, res) {
    res.send('getting me');
});

router.get('/users', function (req, res) {
    res.send('getting users');
});

router.post('/register', function (req, res) {
    userImpl.createUser(req.body).then(function () {
        res.json({status: 200, message: 'user created successfully'});
    }, function (error) {
        res.status(error.status).send(error);
    });
});

router.route('/user/:id')
    .put(function (req, res) {
        res.send('put user');
    })
    .delete(function (req, res) {
        res.send('remove user');
    });


module.exports = router;
