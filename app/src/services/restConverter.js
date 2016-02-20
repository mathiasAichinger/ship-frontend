'use strict';

ship.factory('restConverter', restConverter);

function restConverter () {
    function _appToRest (app) {
        if (app) {
            return {
                'data': {
                    'id': app.id,
                    'type': 'app',
                    'attributes': {
                        'name': app.name,
                        'key': app.key,
                        'description': app.description,
                        'icon_url': app.iconUrl
                    }
                }
            }
        }
    }

    function _appFromRest (app) {
        if (app) {
            return new App(app.id, app.attributes['key'], app.attributes['name'], app.attributes['description'], app.attributes['icon_url'])
        }
    }

    return {
        appToRest: _appToRest,
        appFromRest: _appFromRest
    }
}
