var express = require("express");
const https = require("https");
var app = express();
app.set("port", (process.env.PORT || 5000))
app.set("views", "views");
app.set("view engine", "ejs");
app.listen(app.get("port"), function() {
    console.log("The server is up and listening on port: ", app.get("port"));
});

app.use(express.static("public"));

app.get("/getweather", getWeatherAPI);


function getWeatherAPI(req, res) {   
    var url = "https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=abdd025a60e75fe58a73ce60d22316c7";
    var options = {json: true};

    https.get(url, (response) => {
       var body = '';

       response.on("data", (chunk) => {
           body += chunk;
       });

       response.on("end", () => {
           try {
               let json = JSON.parse(body);
               sendWeather(res, json);
           } catch (error) {
               console.error(error.message);
           };
       });       
    });    
}

function sendWeather(res, data) {
    res.render(JSON.stringify(data));
    res.end();
}


