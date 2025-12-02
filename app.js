const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Create Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const foodRouter = require('./routes/food-services');
const legalRouter = require('./routes/legal');
const beachesRouter = require('./routes/beaches');
const familyRouter = require('./routes/family-activities');
const fineDiningRouter = require('./routes/fine-dining');
const golfRouter = require('./routes/golf-courses');
const hiddenGemsRouter = require('./routes/hidden-gems');
const medSpasRouter = require('./routes/med-spas');
const meetPeopleRouter = require('./routes/meet-people');
const moviesRouter = require('./routes/movie-theaters');
const partyVibesRouter = require('./routes/party-vibe');
const stArmandsRouter = require('./routes/st-armands');
const vibesRouter = require('./routes/vibes');

const app = express();

const connectDB = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI );
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
connectDB(process.env.MONGO_URI)
    .then(r => console.log("Connected to database"))
    .catch(err => console.error('MongoDB connection error:', err));


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
app.use('/update', vibesRouter);

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
