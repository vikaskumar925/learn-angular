// CONTROLLERS
weatherApp.controller('homeController', ['$scope','cityService', function($scope,cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
    	cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forecastController', ['$scope','$resource','$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
     $scope.city = cityService.city;
     $scope.weatherApi =$resource("http://api.openweathermap.org/data/2.5/forecast");
     $scope.days = $routeParams.days || '2';
     $scope.weatherResult = $scope.weatherApi.get({ q: $scope.city,cnt:$scope.days,appid:"4acf20ddbdf8e1d869a99f1ca2f30dcd"});
     $scope.convertToFahrenheit = function(degK){
     	return Math.round(1.8*(degK-273) + 32);
     };
     $scope.convertToDate = function(dt){
     	return new Date(dt*1000);
     };
}]);