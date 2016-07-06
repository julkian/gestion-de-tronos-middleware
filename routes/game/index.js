var router = require('express').Router();

router.route('/game/:id')
    .get(function (req, res) {
        res.send('get game by id');
    })
    .put(function (req, res) {
        res.send('put game');
    })
    .delete(function (req, res) {
        res.send('remove game');
    });

router.post('/game', function (req, res) {
    res.send('post game');
});

module.exports = router;


