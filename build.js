var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var handlebars = require('jstransformer')(require('jstransformer-handlebars'));
var browserSync = require('metalsmith-browser-sync');

var templateConfig = {
  engine: 'handlebars',
  directory: 'layouts',
  partials: 'partials',
  default: 'main.hbs'
}
 
Metalsmith(__dirname)
  .source("src")
  .destination("build")
  .use(layouts(templateConfig))
  .use(browserSync())
  .build(function(err) {
  if (err) console.log(err);
  });