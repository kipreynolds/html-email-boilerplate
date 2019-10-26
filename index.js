var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var handlebars = require('jstransformer')(require('jstransformer-handlebars'));
 
Metalsmith(__dirname)
  .source("src")
  .destination("build")
  .use(layouts({
    engine: "handlebars",
    partials: "layouts/partials"
  }))
  .build(function(err) {
  if (err) console.log(err);
});