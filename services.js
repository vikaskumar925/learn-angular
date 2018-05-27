//SERVICE
weatherApp.service('cityService', function () {
	this.city = "New York";
});
weatherApp.service('weatherService', ['$resource',function($resource) {
	this.GetWeather = function(city, days){
		var weatherApi =$resource("http://api.openweathermap.org/data/2.5/forecast");
		return weatherApi.get({ q: city,cnt:days,appid:"4acf20ddbdf8e1d869a99f1ca2f30dcd"});		
	};
	
}]);