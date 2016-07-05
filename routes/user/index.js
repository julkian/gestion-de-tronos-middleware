var router = require('express').Router();

router.get('/users', function (req, res) {
    res.send('getting users');
});

router.post('/register', function (req, res) {
    res.send('register');
});

router.route('/user/:id')
    .put(function (req, res) {
        res.send('put user');
    })
    .delete(function (req, res) {
        res.send('remove user');
    });

module.exports = router;
