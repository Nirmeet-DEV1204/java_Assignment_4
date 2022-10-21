/*
    Assignment #4
    {Your name here}
*/

$(function () {
    // your code here
    getlocolsotreage();
    var newLat ="";
    var newLong ="";
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
      
      function showPosition(position) {
          newLat= position.coords.latitude;
         newLong= position.coords.longitude;
        var data ={
            lat1:"newLat",
            lon2:"newLong"
        };
        localStorage.setItem('data', JSON.stringify(data));
         $('#locationhere').text("Latitude = "+ newLat +" Longitude ="+newLong);
      }


    function getlocolsotreage(){
        var lat = localStorage.getItem("lat1");
        var lon = localStorage.getItem("lon2");
        if(lat==null)
        {
            getLocation();
        }
        else
        {
            $('#locationhere').html("<p>welocme back !!<p>");
            $('#locationhere').append("Latitude = "+ lat +" Longitude ="+lon);
        }
    }

    // DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
        var toRadians = function (num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (R * c);
    }
});


