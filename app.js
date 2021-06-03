var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); 
// const session = require('express-session');

// var dotenv = require('dotenv');

// dotenv.config()
// const port = process.env.PORT||7000


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var feedbackRouter = require('./routes/feedback');
var deleteRouter = require('./routes/delete');
var navbarRouter = require('./routes/navbar');
var homeRouter = require('./routes/home');
var artistsRouter = require('./routes/artists');
var playlistsRouter = require('./routes/playlists');
var genresRouter = require('./routes/genres');
var addTrackRouter = require('./routes/addTrack');
var addPlaylistRouter = require('./routes/addPlaylist');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use('/addPlaylist', addPlaylistRouter);
app.use('/addTrack', addTrackRouter);
app.use('/delete', deleteRouter);
app.use('/feedback', feedbackRouter);
app.use('/users', usersRouter);
app.use('/genres', genresRouter);
app.use('/playlists', playlistsRouter);
app.use('/artists', artistsRouter);
app.use('/home', homeRouter);
app.use('/navbar', navbarRouter);
app.use('/', indexRouter);
// app.use(session({secret: 'ssshhhhh', resave: false, saveUninitialized: true}));





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
