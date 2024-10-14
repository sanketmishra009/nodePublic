var mustache = require('mustache');
var result = mustache.render("Hi, {{first}} {{last}}!", {
    first: "Nicolas",
    last: "Cage"
  });
console.log(result);