'use strict';

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
