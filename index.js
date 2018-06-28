var fs = require('fs');
var https = require('https');
var express = require('express');
 
const PORT = 443;
    
var app = express();
 
https.createServer({
    key: fs.readFileSync('cert-key-20180624-175505.p12'),
    cert: fs.readFileSync('cert-20180624-175505.crt')
}, app).listen(PORT, function(){
    console.log("My https server listening on port " + PORT + "...");
});
