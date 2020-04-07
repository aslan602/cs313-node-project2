//javascript

function start() {
    
    checkCookie();
}

function startWeatherRequest(city) { 
    city = city.replace("_", " ");   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {            
            console.log("xttp status: " + this.status);
            var weather = JSON.parse(this.responseText);             
            displayweather(weather);          
        }
    };
    xhttp.open("GET", "/getweather?" + city, true);
    xhttp.send();    
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
    document.getElementById("description").innerHTML = description;        
}

function gettime(city) {      
    var time = 0;
    var i;
    console.log("Entered gettime");  
    var justcity = "";
    for (i = 0; i < city.length; i++) {
        if (i > 4) {           
            justcity += city[i];           
        }
    }
    if (justcity == "" || justcity == null) {
        city = document.cookie;
        gettime(city);
    }   
    console.log("Justcity: " + justcity);
    document.getElementById("citytime").innerHTML = justcity;    
    var xtime = new XMLHttpRequest();
    xtime.onreadystatechange = function() {
        time = this.responseText;
        console.log("The response is " + time);
        displaytime(time);
    };      
           
                              
           
    xtime.open("GET", "/gettime?" + city, true);        
    xtime.send();    
}

function displaytime(string) {
    var interval; 
    var offset = 0;
    offset = Number(string);   
    console.log("Entered displaytime and string is: " + offset);   
    if (offset == null || offset == "" || isNaN(offset)) {    
        console.log("There is no time offset! ERROR!");
        return;
    }
    if (offset < -11 || offset > 12) {
        console.log("The value coming in to displaytime is out of range! ERROR!");
        return;
    }
    var i;
    const date = new Date()
    const map = new Map([
    [-11, 'Pacific/Niue'],
    [-10, 'Pacific/Tahiti'],
    [-9, 'Pacific/Gambier'],
    [-8, 'Pacific/Pitcairn'],
    [-7, 'America/Vancouver'],
    [-6, 'America/Denver'],
    [-5, 'America/Rio_Branco'],
    [-4, 'America/Manaus'],
    [-3, 'America/Cayenne'],
    [-2, 'Atlantic/South_Georgia'],
    [-1, 'Atlantic/Azores'],
    [0, 'GMT'],
    [1, 'Europe/Brussels'],
    [2, 'Europe/Helsinki'],
    [3, 'Asia/Riyadh'],
    [4, 'Asia/Dubai'],
    [5, 'Asia/Tashkent'],
    [6, 'Asia/Urumqi'],
    [7, 'Asia/Bangkok'],
    [8, 'Asia/Singapore'],
    [9, 'Asia/Chita'],
    [10, 'Pacific/Chuuk'],
    [11, 'Pacific/Pohnpei'],
    [12, 'Pacific/Wake'],
    ])
    
    switch (offset) {
        case 12:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(12)});
            clearInterval(interval);  
            break;
        case 11:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(11)});
            clearInterval(interval);  
            break;
        case 10:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(10)});
            clearInterval(interval);  
            break;
        case 9:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(9)});
            clearInterval(interval);  
            break;
        case 8:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(8)}); 
            clearInterval(interval); 
            break;
        case 7:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(7)});
            clearInterval(interval);  
            break;
        case 6:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(6)});
            clearInterval(interval);  
            break;
        case 5:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(5)});
            clearInterval(interval);  
            break;
        case 4:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(4)});
            clearInterval(interval);  
            break;
        case 3:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(3)});
            clearInterval(interval);  
            break;
        case 2:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(2)});
            clearInterval(interval);  
            break;
        case 1:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(1)});
            clearInterval(interval);  
            break;
        case 0:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(0)});
            clearInterval(interval);   
            break;
        case -1:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-1)});
            clearInterval(interval);  
            break;
        case -2:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-2)});
            clearInterval(interval); 
            break;
        case -3:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-3)});
            clearInterval(interval);  
            break;
        case -4:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-4)});
            clearInterval(interval);  
            break;
        case -5:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-5)});
            clearInterval(interval);  
            break;
        case -6:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-6)});
            clearInterval(interval);  
            break;
        case -7:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-7)});
            clearInterval(interval);   
            break;
        case -8:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-8)});
            clearInterval(interval);  
            break;
        case -9:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-9)});
            clearInterval(interval);  
            break;
        case -10:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-10)});
            clearInterval(interval);  
            break;
        case -11:
            document.getElementById("time").innerHTML = date.toLocaleTimeString('en-US', {timeZone: map.get(-11)});
            clearInterval(interval);
            break;
        default:
            console.log("ERROR! Using default display setting!  String is: " + offset);
            clearInterval(interval);                  
    }
     
    interval = setInterval(function() {displaytime(offset)}, 1000);     
}

function keeptime() {
    var currenttime = "";
    console.log("Entered Keeptime");
    currenttime = document.getElementById("time").value;
    console.log(currenttime);    
}

function changeCity() {
    console.log("Change city was entered!");
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("citytext").style.visibility = "visible";
    document.getElementById("getcity").style.visibility = "visible";   
}

function checkCookie() {    
    var c = document.cookie;
    if (c == null || c == "") {
        console.log("No cookie found!");
        document.cookie = "city=Phoenix;SameSite=Lax";
        start();
    }
    else {        
        console.log(c);
        startWeatherRequest(c);
        gettime(c);
    }
}

function sendcity() {
    var city = document.getElementById("citytext").value;
    if (city == null || city == "") {
        console.log("Error with entering city!");
        start();
    }
    document.cookie = "city=;SameSite=Lax";
    document.cookie = "city=" + city + ";SameSite=Lax";
    document.getElementById("message").style.visibility = "hidden";
    document.getElementById("citytext").style.visibility = "hidden";
    document.getElementById("getcity").style.visibility = "hidden";
    window.location.reload(true);
}




