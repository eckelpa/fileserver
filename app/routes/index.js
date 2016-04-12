'use strict';

var readDir = require(process.cwd() + '/app/controllers/readDir.js');

module.exports = function (app) {
	
	app.route('/')
		.get(function (req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});

	app.route('/new/')
		.get(function (req, res) {
			res.sendFile(process.cwd() + '/public/login.html');
		});

	app.route('/files')
		.get(function (req, res) {
			var dir = process.cwd() + '/public/files/';
			
			readDir(dir, req, function (err, list) {
				if (err) {
					console.log(err);
					return;
				}
				res.json(list);
			});

		});
		
	app.route('/files/:filename')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/public/files/' + req.params.filename);
		});
		
};
