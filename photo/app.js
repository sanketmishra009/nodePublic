var createError = require('http-errors');
var express = require('express');
var path = require('path');
// const bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');


var photos = require('./routes/photos');

var app = express();

const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// app.use(bodyparser.json());

app.set('photos', __dirname + '/public/assets');

const upload = multer({dest: app.get('photos')});



app.get('/' , photos.list);
app.get('/upload' , photos.form);
app.post('/upload' , upload.single('photo.image')) , photos.submit();



app.listen(port , ()=>{
  console.log("listening on port: ",port);
})
