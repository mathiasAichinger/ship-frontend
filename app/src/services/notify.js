'use strict';

ship.factory('notify', notify);

function notify () {
    PNotify.prototype.options.styling = "bootstrap3";

    function _showNotification (type, text, title) {
        new PNotify({
            title: title,
            text: text,
            type: type
        });
    }

    return {
        notifySuccess: function (text, title) {
            _showNotification('success', text, title);
        },
        notifyWarn: function (text, title) {
            _showNotification('warning', text, title);
        },
        notifyError: function (text, title) {
            _showNotification('error', text, title);
        }
    }
}
