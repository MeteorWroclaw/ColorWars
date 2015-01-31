'use strict';

var getNeighbors = function (obj, x, y) {
    check(obj, Array);
    var neighbors = [];

    [{x: x - 1, y: y}, {x: x + 1, y: y}, {x: x, y: y - 1}, {x: x, y: y + 1}]
        .forEach(function (c) {
            if (obj[c.y] && obj[c.y][c.x]) {
                neighbors.push(obj[c.y][c.x]);
            }
        });

    return neighbors;
};


var colors = ['2ecc71', '3498db', '9b59b6', '34495e', 'd35400', 'f1c40f'];

var generateSquare = function (x, y) {
    return {
        user: null,
        color: _.sample(colors),
        x: x,
        y: y
    }
};

var generateBoard = function (width, height) {
    width = width || 10;
    height = height || 10;
    check(width, Number);
    check(height, Number);

    var board = [];

    _(height).times(function (y) {
        var row = [];
        _(width).times(function (x) {
            row.push(generateSquare(x, y));
        });
        board.push(row);
    });

    return board;

};

Meteor.methods({
    startGame: function () {
        var board = generateBoard();

        Games.insert({
            board: board
        });
    },
    move: function (gameId, move) {
        check(gameId, String);
        check(move, {
            x: Number,
            y: Number
        });

        var userId = this.userId;
        var game = Games.findOne(gameId);

        if(!game){
            throw Meteor.Error(404, 'Game not found');
        }

        var neighbors = getNeighbors(game.board, move.x, move.y);

        if(!_(neighbors).some(function(square){
                return square.user === userId;
            })){

            console.error('Invalid move');
            return;
        }

        console.log(move, neighbors);


    }
});