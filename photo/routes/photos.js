var photos = [];
photos.push({
 name: 'Node.js Logo',
path: 'http://nodejs.org/images/logos/nodejs-green.png' });
photos.push({
name: 'Ryan Speaking',
path: 'https://media.istockphoto.com/id/1369588714/photo/smiling-arab-man-in-glasses-using-laptop-and-writing.jpg?s=1024x1024&w=is&k=20&c=LH84HI0jA1S2UVA_pjNmaeNXuF7250dJfUEpFn2w7hg='
});

var photo = require('../models/photo');
var path = require('path');
var fs = require('fs');
var join = path.join;



exports.list = function(req, res){
    res.render('photos',{
        title:'photos',
        photos:photos
    });
};

exports.form = function(req, res){
    res.render('photos/upload', {
      title: 'Photo upload'
    });
 };


 exports.submit = function(dir){
    return function(req, res, next){
        console.log('Inside log\n', req);
        // var img = req.body.photo.image;
        // var name = req.body.photo.name || img.name;
        // var path = join(dir , img.name);

        // fs.rename(img.path , path , (err) => {
        //     if(err)return err;
        // });
        // photo.create({
        //     name : name , path : img.name
        // }, (err) => {
        //     if(err) return err;
        // });

        res.redirect('/');
    }
 }