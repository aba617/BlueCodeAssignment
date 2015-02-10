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
      document.getElementById("currentTemp").innerHTML = currentAddress;

    	}
    });
    //console.log(currentAddress);

  //  document.getElementById("currentTemp").innerHTML = currentAddress;

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
  //document.getElementById("currentLoc").innerHTML = currentAddress;​
		var lat=coords.k;
		var lon=coords.D;
		var data;
    var request_url = (forecastURL + foreCastAPIKey + "/" + lat + "," + lon);
         
    var ForecastIO = require(["forecast.io"], function(ForecastIO) {
      //This function is called when scripts/helper/util.js is loaded.
      //If util.js calls define(), then this function is not fired until
      //util's dependencies have loaded, and the util argument will hold
      //the module value for "helper/util".
    var latitude = lat;
    var longitude = lon;
    
    var forecast = new ForecastIO({
      PROXY_SCRIPT: 'proxy.php'
    });
  
    /*
     * GET CURRENT CONDITIONS
     */
    var condition = forecast.getCurrentConditions(latitude, longitude);
  
    // echo temperature
    document.getElementById("currentTemp").innerHTML = condition.getTemperature();
  
    /*
     * GET HOURLY CONDITIONS FOR TODAY
     */
    var conditions_today = forecast.getForecastToday(latitude, longitude);
    var items = '';
  
    for(i=0; i<conditions_today.length; i++) {
      items += "<li>"  + conditions_today[i].getTime('HH:mm') + ': ' + conditions_today[i].getTemperature() + "</li>";
    }
  
    document.getElementById("itemList").innerHTML = items;
  
    /*
     * GET DAILY CONDITIONS FOR NEXT 7 DAYS
     */
  
    var conditions_week = forecast.getForecastWeek(latitude, longitude);
    var items2 = '';
  
    for(i=0; i<conditions_week.length; i++) {
      items2 += "<li>"  + conditions_week[i].getTime('YYYY-MM-DD') + ': ' + conditions_week[i].getMaxTemperature() + "</li>";
    }
  
    document.getElementById("itemList2").innerHTML = items2;  
  }); 

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
	
