var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var oauthCallback = require('./routes/oauthCallback');
var middle = require('./routes/middle');
var user_list = require('./routes/user_list');
var oauthList = require('./routes/oauthList');
var writeBlog = require('./routes/writeBlog');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//만약 사용자가 /라는 페이지에 접근 할 경우 routes라는 페이지를 수행시켜라
//routes는 위의 routes = require('./routes/index');가 수행되도록 설정한 것이다.
app.use('/', routes);
app.use('/users', users);
app.use('/oauthCallback', oauthCallback);
app.use('/middle', middle);
app.use('/user_list', user_list);
app.use('/oauthList', oauthList);
app.use('/writeBlog', writeBlog);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
