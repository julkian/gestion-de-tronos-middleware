var router = require('express').Router();
var gameImpl = require('../../persistence/games.implementation');
var serverConstants = require('../../constants/application');

router.route('/game/:gameId')
    .get(function (req, res) {
        gameImpl.getGame(req.params.gameId).then(function (game) {
            res.json({status: 200, message: game});
        }, function (error) {
            res.status(error.status).send(error);
        });
    })
    .put(function (req, res) {
        gameImpl.modifyGame(req.params.gameId, req.body).then(function () {
            res.json(serverConstants.CODE['200']);
        }, function (error) {
            res.status(error.status).send(error);
        });
    })
    .delete(function (req, res) {
        gameImpl.removeGame(req.params.gameId).then(function () {
            res.json(serverConstants.CODE['200']);
        }, function (error) {
            res.status(error.status).send(error);
        });
    });

router.post('/game/:userId', function (req, res) {
    gameImpl.createGame(req.params.userId, req.body).then(function () {
        res.json({status: 200, message: 'game created successfully'});
    }, function (error) {
        res.status(error.status).send(error);
    });
});

module.exports = router;


