var router = require('express').Router();
var express = require('express');

router.use(express.static('/home/curs/workspace_curso_MEAN/gestion-de-tronos-middleware/www/build/'));

router.get('/*', function (req, res) {

    var path = __dirname + '/../www/src/index.html';
    console.log(path);
    res.sendfile('/home/curs/workspace_curso_MEAN/gestion-de-tronos-middleware/www/build/index.html');
});

module.exports = router;