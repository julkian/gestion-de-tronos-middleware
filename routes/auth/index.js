var router = require('express').Router();

router.get('/me', function (req, res) {
    res.send('getting me');
});

router.post('/login', function (req, res) {
    res.send('login');
});

router.post('/logout', function (req, res) {
    res.send('logout');
});

module.exports = router;
