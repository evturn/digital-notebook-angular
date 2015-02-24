var express = require('express');
var app			= express();
var port    = process.env.PORT || 3000;
var logger  = require('morgan');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));


app.listen(port);
console.log("Express listening on localhost:" + port);