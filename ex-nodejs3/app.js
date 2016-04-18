var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var messages = [];

app.set('view engine', 'jade');
app.use(bodyParser())
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.render('index.jade', {data: messages});
  console.log(messages);
});

app.get('/new', function(req, res) {
  res.sendfile('new.html');
});

app.post('/create', function(req, res) {
  var p1 = req.body.p1;
  messages.push(p1);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
// /
// /new send form
// /post redirect
// render
// swig
