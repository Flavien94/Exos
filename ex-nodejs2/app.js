var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/json/:x', function(req, res) {
  res.send({
    message: "It works",
    prop: req.params.x
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
