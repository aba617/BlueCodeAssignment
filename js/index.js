var foreCastAPIKey = 'a1b36163b4e7aad2687f5d02c8ca8233';
var currentAddress;
var coords;
var forecastURL = 'https://api.forecast.io/forecast/';

function getLocation(position){
	var geocoder;
    coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
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
  //	console.log(position);
  	getLocation(position);
  	getForecast();
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success);
  } else {
    error('Geo Location is not supported');
  }
}

function getForecast(){
		var lat=coords.k;
		var lon=coords.D;
		var data;
        var request_url = (forecastURL + foreCastAPIKey + "/" + lat + "," + lon);
         
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if(xhr.readyState==4 && xhr.status==200) {
		        content = xhr.responseText;
	        }
		}
		xhr.open('GET', request_url, false);
		xhr.send();    
        if (content != '' && (content)) {
			 console.log(JSON.parse(content));
		} else {
			return false;
		}
	}
            
           
           // console.log(url + apiKey + "/" + p.coords.latitude.toFixed(2) + "," + p.coords.longitude.toFixed(2) + "?callback=?");
		//var testJSON=(forecastURL + foreCastAPIKey + "/" + lat + "," + lon);
     //   $.getJSON(testJSON);
   //     console.log($);
              //console.log(data);
                //Math.round( number * 10 ) / 10
             //   CelsiusTemp = Math.round((((data.currently.temperature - 32) * 5)/9)*10)/10;
             // $('#weather').html('and the temperature is: ' + CelsiusTemp);
            //});
	
