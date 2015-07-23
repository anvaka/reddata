// Given we have constructed the data base with index.js, this script will
// recommend similar subreddits for a given one
var sourceSubreddit = process.argv[2];
if (!sourceSubreddit) {
  console.log('Pass subreddit name as an argument to get recommendations');
  process.exit(-1);
}

var redisClient = require('./lib/redisClient.js')();
redisClient.getRelated(sourceSubreddit)
 .then(print);

function print(subs) {
  console.log('Users who posted to ' + sourceSubreddit + ' also post to:');
  console.log(subs);
  process.exit(0);
}
