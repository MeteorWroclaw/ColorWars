'use strict';

Template.board.helpers({
    getBoard: function () {
        return generateBoard();
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
