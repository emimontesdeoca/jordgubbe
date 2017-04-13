var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
    $scope.items = []

    // Getting the data from the json file

    $http.get('js/projects.json').then(function(response) {
        $scope.items = response.data;
    });

    // Weather stuff

    $(document).ready(function() {
        loadWeather('Tenerife', '');
    });

    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: 'c',
            success: function(weather) {
                html = weather.city + ', ' + weather.region + ' - ' + weather.temp + '&deg;' + weather.units.temp;
                $("#weather").html(html);
            },
            error: function(error) {
                $("#weather").html('<p>' + error + '</p>');
            }
        });
    }
});
