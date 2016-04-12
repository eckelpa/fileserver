'use strict';

var fs = require('fs');
var path = require('path');

function getStats (file) {
	return fs.statSync(file).size;
}


function readDir (dir, req, cb) {
    fs.readdir(dir, function(err, files) {
		if (err) return cb(err);
		var list = new Array();
		files.forEach(function(file, i) {
			var fspath = path.join(dir, file);
			var size = getStats(fspath);
			list[i] = {name: file, filesize: size, path: path.join(req.path, file)};
		});
		cb(null, list);		
	});
}

module.exports = readDir;