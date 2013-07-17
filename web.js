var express = require('express'),
   http = require('http');
var fs = require('fs');
var htmlfile = "index.html";

var app = express();

var server = http.createServer(app);

app.get('/', function(request, response) {
    var html = fs.readFileSync(htmlfile).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
