const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;
var Twitter = require('twitter-node-client').Twitter;
var config = {
  "consumerKey": "5BpYDhBG7CiAQ2H4SSsDPsk3I",
  "consumerSecret": "RmPUKgjP0CKqUtwoRwEqwHoWU2pdUOgUpni9GiOuizNtjuN5cN",
  "accessToken": "1072304198-zmqACrQBI0LLq68yrqddPheYsobOdymJl6aPgqu",
  "accessTokenSecret": "KzlKs0hmfVeLXet6y2wkiw6S7zk2c09QxbfuMntaFoQNU",
  "callBackUrl": "none"
}
var twitterClient = new Twitter(config);
var error = function(err, response, body) {
  console.log('ERROR [%s]', err);
};

http.createServer((req, res) => {
  twitterClient.getSearch({
    'q': '#marseille',
    'count': 20,
    'geocode': '43,5,200mi',

  }, error, function(data){
    tweet = JSON.parse(data);
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    'add_header Access-Control-Allow-Origin *'
    res.end(JSON.stringify(tweet));
  });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
