var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var http = require('http');
var app = express();


app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use('/' ,routes);

module.exports = app;

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
