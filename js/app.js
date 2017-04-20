var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {

    $scope.items = []
    $scope.config = []

    // Getting the data from the config json file
    $http.get('js/config.json').then(function(response) {
        $scope.config = response.data;
    });

    // Getting the data from the apps json file
    $http.get('js/apps.json').then(function(response) {
        $scope.items = response.data;
    });

    // Weather stuff
    $(document).ready(function() {
        loadWeather('Tenerife', '');
    });


    // Weather function
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
