'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/*', function (req, res) {
   res.sendFile(__dirname + '/index.html'); 
});

var server = app.listen(process.env.PORT || 4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('LARS PoC Angular2 listening at http://%s:%s', host, port);
});
