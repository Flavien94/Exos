//Callback functions
var error = function(err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function(data) {
  twitter = JSON.parse(data);
};

var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
  "consumerKey": "5BpYDhBG7CiAQ2H4SSsDPsk3I",
  "consumerSecret": "RmPUKgjP0CKqUtwoRwEqwHoWU2pdUOgUpni9GiOuizNtjuN5cN",
  "accessToken": "1072304198-zmqACrQBI0LLq68yrqddPheYsobOdymJl6aPgqu",
  "accessTokenSecret": "KzlKs0hmfVeLXet6y2wkiw6S7zk2c09QxbfuMntaFoQNU",
  "callBackUrl": "none"
}

var twitter = new Twitter(config);
const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(twitter));
  $('#demo').append(twitter);
  var jsonString = '@Html.Raw(Model.ToJson())';
  var jsonObj = JSON.parse(jsonString);
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Example calls

twitter.getUserTimeline({
  screen_name: 'Flavz',
  count: '1'
}, error, success);

twitter.getMentionsTimeline({
  count: '1'
}, error, success);

twitter.getHomeTimeline({
  count: '1'
}, error, success);

twitter.getReTweetsOfMe({
  count: '1'
}, error, success);

twitter.getTweet({
  id: '@Flavz94'
}, error, success);


//
// Get 10 tweets containing the hashtag haiku
//

twitter.getSearch({
  'q': '#haiku',
  'count': 2
}, error, success);

//
// Get 10 popular tweets with a positive attitude about a movie that is not scary
//

twitter.getSearch({
  'q': ' movie -scary :) since:2013-12-27',
  'count': 1,
  'result\_type': 'popular'
}, error, success);

twitter.getCustomApiCall('/statuses/lookup.json', {
  id: '412312323'
}, error, success);
twitter.postCustomApiCall('/direct_messages/new.json', {
  user_id: '1234',
  'text': 'This is easy.'
}, error, success);
