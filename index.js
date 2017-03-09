var express = require('express');
var app = express();
var connection = require('./connection'); 
var routes = require('./controller');
var globals = require('./globals');

//var admin = require('admin');
//app.use(admin(app));

app.listen(2525, function() {
  console.log('listening on 2525')
})
