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
                    },
                    'relationships.lane_templates.data': app.lane_templates
                }
            }
        }
    }

    function _appFromRest (app) {
        if (app) {
            return new App(app.id, app.attributes['key'], app.attributes['name'], app.attributes['description'], app.attributes['icon_url'], app.relationships.lane_templates.data)
        }
    }

    return {
        appToRest: _appToRest,
        appFromRest: _appFromRest
    }
}
