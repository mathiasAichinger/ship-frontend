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
                    // 'relationships': {
                    //     'lane_templates': {
                    //         'data': app.lane_templates
                    //     },
                    //     'builds': {
                    //         'data': app.builds
                    //     }
                    // }
                }
            }
        }
    }

    function _appFromRest (app, included) {
        if (app) {
            var appObject = new App(app.id, app.attributes.key, app.attributes.name, app.attributes.description, app.attributes.icon_url, app.relationships.lane_templates.data, null)
            var builds = [];
            var build_ids = [];

            angular.forEach(app.relationships.builds.data, function(value, key) {
                build_ids.push(value.id)
            });

            angular.forEach(included, function(value, key) {
                if (build_ids.indexOf(value.id) != -1) {
                    builds.push(_buildFromRest(value.id, value.attributes))
                }
            });
            appObject.builds = builds;
            return appObject;
        }
    }

    function _buildFromRest(id, attributes) {
        if (attributes) {
            return new Build(id, attributes.name, attributes.status, attributes.progress, attributes.startDate, attributes.endDate)
        }
    }

    return {
        appToRest: _appToRest,
        appFromRest: _appFromRest,
        buildFromRest: _buildFromRest
    }
}
