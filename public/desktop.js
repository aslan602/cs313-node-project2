//javascript

function start() {
    SameSite=
    checkCookie();
}

function startWeatherRequest(city) {    
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

function gettime(city) {    
    var time;
    console.log("Entered gettime");
    var xtime = new XMLHttpRequest();
    xtime.onreadystatechange = function() {       
            console.log("xtime status: " + this.status);
            time = this.responseText;            
            console.log(time);
            displaytime(time);
    };
    xtime.open("GET", "/gettime?" + city, true);        
    xtime.send();
    return;  
}

function displaytime(string) {
    console.log("Entered displaytime");  
    console.log(string);
    console.log(string.length);
    var hour = "";
    var minute = "";
    var second = "";
    var hours;
    var minutes;
    var seconds;
    var m = "";
    var i;
    var x;
    var time = ""; 
    // Get time from string    
    for (i = 0; i < 21; i++) {
        if (string[i] == 'T') {
            for (x = i + 1; x < i + 9; x++) {
                time += string[x];
            }
        }
    }
    //Get hours, minutes, and seconds from string
    for (i = 0; i <= 1; i++) {
        hour += time[i];
        hours = Number(hour);
    }
    for (i = 3; i <= 4; i++) {
        minute += time[i];
        minutes = Number(minute);
    }
    if (minutes < 10) {
        switch (minutes) {
            case 0:
                minutes = "00";
                break;
            case 1:
                minutes = "01";
                break;
            case 2:
                minutes = "02";
                break;
            case 3:
                minutes = "03";
                break;
            case 4:
                minutes = "04";
                break;
            case 5:
                minutes = "05";
                break;
            case 6:
                mintues = "06";
                break;
            case 7:
                minutes = "07";
                break;
            case 8:
                minutes = "08";
                break;
            case 9:
                minutes = "09"
                break;
            default:
                minutes = "00";
        }
    }
    for (i = 6; i <= 7; i++) {
        second += time[i];
        seconds = Number(second);
    }
    if (seconds < 10) {
        switch (seconds) {
            case 0:
                seconds = "00";
                break;
            case 1:
                seconds = "01";
                break;
            case 2:
                seconds = "02";
                break;
            case 3:
                seconds = "03";
                break;
            case 4:
                seconds = "04";
                break;
            case 5:
                seconds = "05";
                break;
            case 6:
                seconds = "06";
                break;
            case 7:
                seconds = "07";
                break;
            case 8:
                seconds = "08";
                break;
            case 9:
                seconds = "09"
                break;
            default:
                seconds = "00";
        }
    }
    //Get 24 time to 12 hour time
    if (hours >= 12) {
        m = "PM";
        if (hours > 12)
           hours = hours - 12;
    }
    else {
        m = "AM";
    }
    //Send the correct time to the display
    time = hours + ":" + minutes + ":" + seconds + " " + m;
    document.getElementById("time").innerHTML = time;
    rolltime();   
    return;
}


function rolltime() {
    setInterval(keeptime, 1000);
}

function keeptime() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function changeCity() {
    console.log("Change city was entered!");
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
    document.getElementById("citytext").style.visibility = "hidden";
    document.getElementById("getcity").style.visibility = "hidden";
    start();
}


