"use strict";

var puremvc = require('puremvc').puremvc;
var BookLayer = require('./../component/BookLayer.js').BookLayer;
var SceneAction = require('./../../profile/flow/SceneAction.js').SceneAction;

module.exports = puremvc.define
(
    // CLASS INFO
    {
        name: 'view.mediator.BookMediator',
        parent: puremvc.Mediator,
        constructor: function() {
            puremvc.Mediator.call(this, this.constructor.NAME);
        }

    },
    // INSTANCE MEMBERS
    {
        /** @override */
        listNotificationInterests: function () {
            return [ ];
        },

        /** @override */
        handleNotification: function (note) {

        },

        /** @override */
        onRegister: function () {

        },

        /** @override */
        onRemove: function () {

        },
        init: function() {
            var self = this;

            self.viewComponent = new BookLayer();
            self.viewComponent.winSize = cc.director.getWinSize();
            self.viewComponent.onClose = function() {
                self.sendNotification(puremvc.statemachine.StateMachine.ACTION, null, SceneAction.$('HOME_ACTION'));
            };

            self.viewComponent.init();
        },
        destroy: function() {
            this.viewComponent = null;
        },
        getResource: function () {
            return null;
        }
    },
    // STATIC MEMBERS
    {
        NAME: 'BookMediator'
    }
);
