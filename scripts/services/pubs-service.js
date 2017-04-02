
angular
    .module("pickandgol")
    .service("pubsService", function ($http, Properties, UrlConversionsFactory) {
        // All functionality that you want to export has to be published here

        this.getPubs = function (filters) {
            let url = Properties.serverUrl
                + Properties.endpointPubs;

            // Check for filters to apply
            if (filters && Object.keys(filters).length > 0){
                // Add filters as url parameters
                url += UrlConversionsFactory.objectToUrlParams(filters);
            }

            return $http.get(url);
        };

        this.getPub = (pubId) => {
            return $http.get(Properties.serverUrl + Properties.endpointPubs + "/" + pubId);
        };

        this.getImagePath = function (path) {
            const defaultPath = '/static/pubs/pub-default.jpg';

            return path || defaultPath;
        };

        this.savePub = function (pub) {
            return $http.post(Properties.serverUrl +
                Properties.endpointPubs,
                pub);
        };

    });
