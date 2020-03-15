//javascript

function startWeatherRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readystate == 4 && this.status == 200) {
            document.getElementById("weather").innerHTML = this.responseText;            
        }
    };
    xhttp.open("GET", "/getweather", true);
    xhttp.send();
}