var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var foodRouter = require('./routes/food-services');
var legalRouter = require('./routes/legal');
var beachesRouter = require('./routes/beaches');
var familyRouter = require('./routes/family-activities');
var fineDiningRouter = require('./routes/fine-dining');
var golfRouter = require('./routes/golf-courses');
var hiddenGemsRouter = require('./routes/hidden-gems');
var medSpasRouter = require('./routes/med-spas');
var meetPeopleRouter = require('./routes/meet-people');
var moviesRouter = require('./routes/movie-theaters');
var partyVibesRouter = require('./routes/party-vibe');
var stArmandsRouter = require('./routes/st-armands');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/food-service', foodRouter);
app.use('/legal', legalRouter);
app.use('/beaches', beachesRouter);
app.use('/family', familyRouter);
app.use('/fine-dining', fineDiningRouter);
app.use('/golf', golfRouter);
app.use('/hidden-gems', hiddenGemsRouter);
app.use('/med-spas', medSpasRouter);
app.use('/meet-people', meetPeopleRouter);
app.use('/movie-theaters', moviesRouter);
app.use('/party-vibes', partyVibesRouter);
app.use('/st-armands', stArmandsRouter);

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
