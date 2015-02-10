var foreCastAPIKey = 'a1b36163b4e7aad2687f5d02c8ca8233';
var currentAddress;
var forecastURL = 'https://api.forecast.io/forecast/';

function getLocation(position){
	var geocoder;
    var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    geocoder = new google.maps.Geocoder();
   // var lat = coords.k;
   // var lon = coords.D;
   // console.log(coords);
   // console.log(coords.k);
   // console.log(coords.D);
    geocoder.geocode({'latLng': coords}, function(results, status) {
    	if(status == google.maps.GeocoderStatus.OK){
			currentAddress=results[1].formatted_address;
    		console.log(currentAddress);
    	}
    });

}


function initialize() {
  function success(position) {
  	console.log(position);
  	getLocation(position);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    error('Geo Location is not supported');
  }
}

function getForecast(location){
	if(currentAddress != null){

	}
}