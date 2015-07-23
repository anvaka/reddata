var Redis = require('ioredis');
var Promise = require('bluebird');
var subPrefix = 's:';
var userPrefix = 'u:';

module.exports = redisClient;

function redisClient() {
  var redis = new Redis();
  return {
    addComment: addComment,
    getRelated: getRelated
  };

  function addComment(user, subreddit) {
    // Store both maps:
    // * sub -> users
    // * user -> subs
    // This way we can save on computing similarities later
    redis.sadd(subPrefix + subreddit, user);
    redis.sadd(userPrefix + user, subreddit);
  }

  function getRelated(sourceSub) {
    // TODO: this should be much faster and easier to implement if it's written
    // with lua as redis script. I'm keeping this hack here for quick prototping
    console.log('Getting subreddits simlar to ' + sourceSub);
    return redis.smembers(subPrefix + sourceSub)
      .then(getOtherSubs)
      .then(computeSimilarity);

    function computeSimilarity(otherSubreddits) {
      console.log('Found ' + otherSubreddits.length + ' other subreddits');
      console.log('Computing similarity with each of them...');

      return Promise.all(otherSubreddits.map(toSimilarity))
             .then(function (similarities) {
               return similarities.sort(bySimilarity);
             });
    }

    function toSimilarity(otherSub) {
      return redis.sinterstore('t:throw-away-inter',
                        subPrefix + sourceSub,
                        subPrefix + otherSub)
                  .then(getUnion);

      function getUnion(intersectCount) {
        if (intersectCount === 0) {
          return {
            name: otherSub,
            sim: 0
          };
        }

        return redis.sunionstore('t:throw-away-union',
                        subPrefix + sourceSub,
                        subPrefix + otherSub)
                  .then(function(unionCount) {
                    return {
                      name: otherSub,
                      sim: intersectCount/unionCount
                    };
                  });

      }
    }
  }

  function getOtherSubs(members) {
    return Promise.all(members.map(toSubreddits)).then(getUnique);
  }

  function toSubreddits(member) {
    return redis.smembers(userPrefix + member);
  }
}

function bySimilarity(x, y) {
  return y.sim - x.sim;
}

function getUnique(usersToSubs) {
  var unifier = Object.create(null);
  for (var i = 0; i < usersToSubs.length; ++i) {
    var subs = usersToSubs[i];
    for (var j = 0; j < subs.length; ++j) {
      unifier[subs[j]] = 1;
    }
  }

  return Object.keys(unifier);
}
