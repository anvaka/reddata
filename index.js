// Reads reddit comments file https://archive.org/details/2015_reddit_comments_corpus
// and emits:
// user subreddit
// strings
var fileName = process.argv[2];
if (!fileName) {
  console.log('Pass file name as an argument');
  process.exit(-1);
}

var fs = require('fs');
var byline = require('byline');
var redisClient = require('./lib/redisClient.js')();

var stream = fs.createReadStream(fileName, {
  encoding: 'utf8'
});
stream = byline.createStream(stream);
var processedCount = 0;

stream.on('data', function(line) {
  var authorMatch = line.match(/author":"(.+?)"/);
  if (!authorMatch) {
    console.log('!!! no author in ', line);
    process.exit(1);
  }
  var subMatch = line.match(/subreddit":"(.+?)"/);
  if (!subMatch) {
    console.log('!!! no subreddit in ', line);
    process.exit(2);
  }
  var author = authorMatch[1];
  if (author !== '[deleted]') {
    processedCount += 1;
    redisClient.addComment(author, subMatch[1]);
    if ((processedCount % 50000) === 0) {
      reportProgress();
    }
  }
}).on('end', function() {
  reportProgress();
  console.log('Done!');
});

function reportProgress() {
  console.log('Processed', processedCount, 'records');
}
