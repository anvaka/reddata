// Given we have constructed the data base with index.js, this script will
// recommend similar subreddits for a given one
var sourceSubreddit = process.argv[2];
var limit = 10;
if (!sourceSubreddit) {
  console.log('Pass subreddit name as an argument to get recommendations');
  process.exit(-1);
}

var redisClient = require('./lib/redisClient.js')();
redisClient.getRelated(sourceSubreddit)
 .then(print);

function print(subs) {
  console.log('### related to ' + link(sourceSubreddit));
  console.log(subs.slice(0, limit).map(toMarkdown).join('\n'));
  process.exit(0);
}

function toMarkdown(record) {
  return '* ' + link(record.name) + ' - simlarity ' + record.sim.toFixed(4);
}

function link(subName) {
   return '[/r/' + subName + '](https://www.reddit.com/r/' + subName + ')';
}
