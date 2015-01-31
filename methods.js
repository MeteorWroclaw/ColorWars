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
}

Meteor.methods({
    move: function (gameId, move) {
        check(gameId, String);
        check(move, {
            x: Number,
            y: Number
        })

        var neighbors = getNeighbors([], move.x, move.y);

        console.log(move, neighbors);


    }
});