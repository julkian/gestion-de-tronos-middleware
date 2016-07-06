var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    totalGold: {type: Number, default: 0},
    goldRate: {type: Number, default: 1},
    soldiers: {type: Number, default: 0},
    houseName: String,
    Buildings: [],
    familiesDefeated: []
});

module.exports = mongoose.model('games', gameSchema);
