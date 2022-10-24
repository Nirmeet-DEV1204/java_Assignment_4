/*
    Assignment #4
    {Nirmeet Pansuriya}
*/

$(function () {
    // your code here
    var Lat ="";
    var Long ="";
    location();
    
    function calucateOrDisplay(){
        var data = localStorage.getItem("location");
        var data = data.split(",");
        data[0] = data[0].replace("[","");
        data[1] = data[1].replace("]","");
        if(data[0]==null && data[1]==null)
        {
            var html=`<p>Your Location</p>
            <p>Latitiude : ${Lat}</p>
            <p>Longitude : ${Long}</p>
            `
            var dataArr = [];  
            dataArr.push(Lat);
            dataArr.push(Long);
            localStorage.setItem('location', JSON.stringify(dataArr)); 
            $('#locationhere').html(html);

        }
        else{
            var dis = calcDistanceBetweenPoints(data[0],data[1],Long,Long);
            var html=`Dsiatnce is = ${dis}`
            $('#locationhere').html(html);

        }
    }
   
    
    function location(){
       
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }

          function showPosition(position) {
            Lat= position.coords.latitude;
            Long= position.coords.longitude;
            calucateOrDisplay();
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




