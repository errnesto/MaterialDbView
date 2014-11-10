var express      = require('express');
var livereload   = require('connect-livereload');

var app          = express();


// server just for development
app.use(livereload({ port: 35729 }));
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000);