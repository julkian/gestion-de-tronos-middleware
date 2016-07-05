var router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/', require('./user'));
router.use('/', require('./user-actions'));


module.exports = router;
