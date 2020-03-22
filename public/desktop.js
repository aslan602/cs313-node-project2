//javascript

function start() {
    startWeatherRequest();
    gettime();
}

function startWeatherRequest() {    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {            
            console.log("xttp status: " + this.status);
            var weather = JSON.parse(this.responseText);             
            displayweather(weather);          
        }
    };
    xhttp.open("GET", "/getweather", true);
    xhttp.send();
    return;
}

function displayweather(weather) {
    var current = weather.main.temp;
    var city = weather.name;
    var min = weather.main.temp_min;
    var max = weather.main.temp_max;
    var humidity = weather.main.humidity;
    var description = weather.weather[0].description;
    

    document.getElementById("city").innerHTML = city;
    document.getElementById("current").innerHTML = current;
    document.getElementById("min").innerHTML = min;
    document.getElementById("max").innerHTML = max;
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("description").innerHTML = description
    return;     
}

function gettime() {
    console.log("Entered gettime");
    var xtime = new XMLHttpRequest();
    xtime.onreadystatechange = function() {       
            console.log("xtime status: " + this.status);
            var time = JSON.parse(this.responseText);
            console.log(time);
            displaytime(time);
    };
    xtime.open("GET", "/gettime", true);        
    xtime.send();
    return;  
}

function displaytime(time) {
    document.getElementById("time").innerHTML = time.datetime;
    return;
}



