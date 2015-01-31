'use strict';

var testGame = {};

var colors = ['2ecc71', '3498db', '9b59b6', '34495e', 'd35400', 'f1c40f'];

var generateSquare = function (x, y) {
    return {
        user: null,
        color: _.sample(colors),
        x: x,
        y: y
    }
}

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

Template.board.created = function () {
    //this.board = generateBoard();
};
Template.board.helpers({
    getBoard: function () {
        return generateBoard();
    }
});

Template.square.events({
    'click': function (e, t) {
        Meteor.call('move', 'ID', {
            x: this.x,
            y: this.y
        })
    }
});
