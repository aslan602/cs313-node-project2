var express = require("express");
const https = require("https");
const http = require("http");
var app = express();
app.set("port", (process.env.PORT || 5000))
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.listen(app.get("port"), function() {
    console.log("The server is up and listening on port: ", app.get("port"));
});

app.use(express.static("public"));

app.get("/getweather", getWeatherAPI);

app.get("/gettime", gettimeAPI);


function getWeatherAPI(req, res) {
    var data = "";   
    var url = "https://api.openweathermap.org/data/2.5/weather?q=phoenix&units=imperial&appid=abdd025a60e75fe58a73ce60d22316c7";    

    req.on("error", (e) => {
        console.error(e);
        res.end();
    });

    req = https.get(url, (response) => {
       var body = '';       
       console.log("StatusCode: ", response.statuscode);
       console.log("Headers: ", response.headers);

       response.on('data', (d) => {           
           body += d;
       });

       response.on('error', (e) => {
           console.error(e);           
       });

       response.on('end', () => {
            try {                            
               data = body; 
               console.log(data);                              
               res.send(data);  
               res.end();                                                    
           } catch (error) {
               console.error(error.message);
           };
       });                 
    }); 
    
}

function gettimeAPI(request, response) {
    var d = "";
    var e = "";
    var body = "";
    var datatime = "";
    var url = "http://worldtimeapi.org/api/timezone/America/Phoenix";

    request.on("error", (e) => {
        console.error(e);
        response.end();
    });

    request = http.get(url, (res) => {              
       console.log("StatusCode: ", res.statuscode);
       console.log("Headers: ", res.headers);

       res.on('data', (d) => {           
           body += d;
       });

       res.on('error', (e) => {
           console.error(e);           
       });

       res.on('end', () => {
            try { 
               datatime = JSON.parse(body);               
               console.log(body); 
               console.log(datatime);
               console.log(datatime.datetime);                                        
               response.send(JSON.stringify(datatime.datetime));  
               response.end();                                                    
           } catch (error) {
               console.error(error.message);
           };
       });
    });    
}

