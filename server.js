// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  
  var json = {
    ipaddress: request.headers['x-forwarded-for'].split(',')[0],
    language: request.headers["accept-language"].split(',')[0],
    software: getOs(request.headers["user-agent"])
  };
  response.send(json);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function getOs(userAgent) {
  return userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
}