var router = require('express').Router();

router.post('/battle', function (req, res) {
    res.send('better not battle');
});

router.post('/lvlup', function (req, res) {
    res.send('lvl up');
});

module.exports = router;
