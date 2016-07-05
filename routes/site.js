var router = require('express').Router();

router.get('/*', function (req, res) {
    res.send('entro en site');
});

module.exports = router;