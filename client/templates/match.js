'use strict';

Template.board.created = function () {
    //this.board = generateBoard();
};
Template.board.helpers({
    getBoard: function () {
        var gameId = Router.current().params._id;
        if (!gameId) {
            return;
        }
        var game = Games.findOne(gameId);
        if (!game) {
            return;
        }
        return game.board;
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
