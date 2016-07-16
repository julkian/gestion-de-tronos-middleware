var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    totalGold: {type: Number, default: 0},
    goldRate: {type: Number, default: 1},
    soldiers: {type: Number, default: 0},
    houseName: String,
    Buildings: {},
    familiesDefeated: {
        Tully: false,
        Tyrell: false,
        Martell: false,
        Greyjoy: false,
        Baratheon: false,
        Stark: false,
        Lannister: false,
        Targaryen: false
    },
    septonMultiplier: {type: Number, default: 1}
});

module.exports = mongoose.model('games', gameSchema);
