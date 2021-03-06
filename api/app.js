var express    = require('express');
var path       = require('path');
var cors       = require('cors');
var logger     = require('morgan');
var bodyParser = require('body-parser');
var app        = express();

var mongoose   = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/may-the-force');

var routes     = require('./config/routes');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000);


