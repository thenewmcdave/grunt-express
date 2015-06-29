var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('*', function(req, res) {
  return res.send('Path: ' + req.path);
});

var exports = module.exports = server;
exports.use = app.use.bind(app);