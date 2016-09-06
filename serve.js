'use strict';

var http = require('http');
var https = require('https');
var certs = require('localhost.daplie.com-certificates');
var express = require('express');
var app = express();
var plainServer = http.createServer(app);

var fs = require('fs');
var RSA = require('rsa-compat').RSA;
var config = require('./config.js');


function serve() {
  var path = require('path');
  var pokeapp = require('./').create();
  var serveStatic = express.static(path.join(__dirname, 'public', 'static'));

  app.use('/', pokeapp);
  app.use('/static', serveStatic);
  app.use('/', serveStatic);


  plainServer.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://127.0.0.1:' + plainServer.address().port);
  });

}

serve();