'use strict';

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
        var gameId = Router.current().params._id;
        if (!gameId) {
            return;
        }

        Meteor.call('move', gameId, {
            x: this.x,
            y: this.y
        })
    }
});
