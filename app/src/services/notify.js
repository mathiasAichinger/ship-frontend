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
        success: function (text, title) {
            if (!title) {
                title = 'Success';
            }
            _showNotification('success', text, title);
        },
        warn: function (text, title) {
            if (!title) {
                title = 'Warning';
            }
            _showNotification('warning', text, title);
        },
        error: function (text, title) {
            if (!title) {
                title = 'Error';
            }
            _showNotification('error', text, title);
        }
    }
}
