var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
require("dotenv").config(); 


//DB connection
/*
mongoose.connect(process.env.mongoDB_URL, {useNewUrlParser: true, useUnifiedTopology: true} );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});*/

//for directory
var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.use('/', indexRouter);
app.use('/pomace', indexRouter);
app.use('/brewersgold', indexRouter);
app.use('/services', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
