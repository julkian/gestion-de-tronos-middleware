var router = require('express').Router();
var authImpl = require('../../implementation/auth.implementation');

router.post('/login', function (req, res) {
    authImpl.login(req.body).then(function (token) {
        res.json({status: 200, message: token});
    }, function (err) {
        res.status(err.status).send(err);
    })
});

module.exports = router;
