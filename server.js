'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/public/files', express.static(process.cwd() + '/public/files'));
app.use('/routes', express.static(process.cwd() + '/app/routes'));
app.use('/js', express.static(process.cwd() + '/public/js'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});