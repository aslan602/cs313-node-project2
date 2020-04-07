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
    var city = req.query.city;
    var data = "";   
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=abdd025a60e75fe58a73ce60d22316c7";    

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
    var city = request.query.city;       
    console.log("GettimeAPI city = " + city);
    var offset = 0;
    var d = "";
    var e = "";
    var body = "";
    var datatime = "";
    var url = "http://worldtimeapi.org/api/timezone/America/" + city;

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
               console.log(datatime.utc_offset);
               offset = getOffsetNumber(datatime.utc_offset);
               console.log("The city is: " + city); 
               console.log("The sending offset number is: " + offset);                                                   
               response.send(JSON.stringify(offset));  
               response.end();                                                    
           } catch (error) {
               console.error(error.message);
           };
       });
    });    
}

function getOffsetNumber(string) {
    var offsetReturnNumber = 0;
    switch (string) {
        case "+12:00":
            offsetReturnNumber = 12;
            break;
        case "+11:00":
            offsetReturnNumber = 11;
            break;
        case "+10:00":
            offsetReturnNumber = 10;
            break;
        case "+09:00":
            offsetReturnNumber = 9;
            break;
        case "+08:00":
            offsetReturnNumber = 8;
            break;
        case "+07:00":
            offsetReturnNumber = 7;
            break;
        case "+06:00":
            offsetReturnNumber = 6;
            break;
        case "+05:00":
            offsetReturnNumber = 5;
            break;
        case "+04:00":
            offsetReturnNumber = 4;
            break;
        case "+03:00":
            offsetReturnNumber = 3;
            break;
         case "+02:00":
             offsetReturnNumber = 2;
             break;
        case "+01:00":
            offsetReturnNumber = 1;
            break;
        case "+00:00":
            offsetReturnNumber = 0;
            break;
        case "-01:00":
            offsetReturnNumber = -1;
            break;
        case "-02:00":
            offsetReturnNumber = -2;
            break;
        case "-03:00":
            offsetReturnNumber = -3;
            break;
        case "-04:00":
            offsetReturnNumber = -4;
            break;
        case "-05:00":
            offsetReturnNumber = -5;
            break;        
        case "-06:00":
            offsetReturnNumber = -6;
            break;
        case "-07:00":
            offsetReturnNumber = -7;
            break;
        case "-08:00":
            offsetReturnNumber = -8;
            break;
        case "-09:00":
            offsetReturnNumber = -9;
            break;
        case "-10:00":
            offsetReturnNumber = -10;
            break;
        case "-11:00":
            offsetReturnNumber = -11;
            break;       
        default:
            offsetReturnNumber = 0;
    }
    return offsetReturnNumber;
}

