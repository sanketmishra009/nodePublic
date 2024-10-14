const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photos')

var Schema = new mongoose.Schema({
    name : String,
    path : String
});

module.exports = mongoose.model('photo' , Schema);
