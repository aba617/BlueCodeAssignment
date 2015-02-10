		function testCall(){

		var foreCastAPIKey = 'a1b36163b4e7aad2687f5d02c8ca8233';
var currentAddress;
var coords;
var forecastURL = 'https://api.forecast.io/forecast/';

		var data;
        var request_url = (forecastURL + foreCastAPIKey + "/" + 40.002 + "," + 70.112);
         
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
		}}